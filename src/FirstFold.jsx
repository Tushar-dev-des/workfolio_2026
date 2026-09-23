import React, { useEffect, useRef } from 'react'
import dice_logo from './assets/logo_dice.svg'
import zaggle_logo from './assets/zaggle_logo.svg'
import './FirstFold.css'
import { Link } from 'react-router-dom'

const MIN_WEIGHT = 100
const MAX_WEIGHT = 900

// how far the cursor's pull reaches, and how much it adds on top of the base weight
const RIPPLE_RADIUS = 170
const RIPPLE_BOOST = 340
const RIPPLE_LIFT = 10

const SCROLL_CUE_THRESHOLD = 40

// Splits a string into per-character spans so each letter can be weighted on its own.
// Spaces stay as bare text nodes: they have no glyph to weight, and leaving them out
// of the inline-block run keeps normal word wrapping intact on narrow windows.
const splitChars = (text) =>
    Array.from(text).map((character, index) =>
        character === ' '
            ? character
            : <span className="title_char" key={`${character}-${index}`}>{character}</span>
    )

function FirstFold() {
    const foldRef = useRef(null)
    const cueRef = useRef(null)

    useEffect(() => {
        const cue = cueRef.current
        if (!cue) return

        const syncAtTop = () => {
            // Lenis runs in root mode here, so it drives the real window scroll
            cue.classList.toggle('is_hidden', window.scrollY > SCROLL_CUE_THRESHOLD)
        }

        syncAtTop()
        window.addEventListener('scroll', syncAtTop, { passive: true })

        return () => window.removeEventListener('scroll', syncAtTop)
    }, [])

    useEffect(() => {
        const node = foldRef.current
        if (!node) return

        const chars = Array.from(node.querySelectorAll('.title_char'))
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        // start centred so the title has a sane weight before the first pointer move
        let target = (MIN_WEIGHT + MAX_WEIGHT) / 2
        let current = target
        let pointerX = window.innerWidth / 2
        let pointerY = window.innerHeight / 2
        let hasPointer = false
        let pendingMove = false
        let frame = null

        // Character centres are cached rather than read every frame: measuring all of
        // them forces a reflow, and the weights themselves change the layout. We
        // re-measure whenever something structural moves, and again once the ease settles.
        let metrics = []
        const measure = () => {
            metrics = chars.map((el) => {
                const rect = el.getBoundingClientRect()
                return { el, cx: rect.left + rect.width / 2, cy: rect.top + rect.height / 2 }
            })
        }

        const paint = () => {
            node.style.setProperty('--title-weight', current.toFixed(1))
            node.style.setProperty('--title-weight-inverse', (MIN_WEIGHT + MAX_WEIGHT - current).toFixed(1))

            for (const { el, cx, cy } of metrics) {
                let influence = 0

                if (hasPointer) {
                    const distance = Math.hypot(pointerX - cx, pointerY - cy)
                    if (distance < RIPPLE_RADIUS) {
                        const falloff = 1 - distance / RIPPLE_RADIUS
                        // smoothstep keeps the edge of the ripple from looking like a hard circle
                        influence = falloff * falloff * (3 - 2 * falloff)
                    }
                }

                const weight = Math.min(current + influence * RIPPLE_BOOST, MAX_WEIGHT)
                el.style.fontVariationSettings = `'wght' ${weight.toFixed(1)}`
                el.style.transform = influence ? `translateY(${(-influence * RIPPLE_LIFT).toFixed(2)}px)` : ''
            }
        }

        const tick = () => {
            // ease toward the pointer so the weight glides instead of snapping
            current += (target - current) * 0.12
            const settled = Math.abs(target - current) <= 0.1
            if (settled) current = target

            const hadPendingMove = pendingMove
            pendingMove = false
            paint()

            if (settled && !hadPendingMove) {
                frame = null
                measure() // layout has stopped shifting, so centres are trustworthy again
                return
            }

            frame = requestAnimationFrame(tick)
        }

        const requestFrame = () => {
            if (frame === null) frame = requestAnimationFrame(tick)
        }

        const handleMove = (event) => {
            pointerX = event.clientX
            pointerY = event.clientY
            hasPointer = true
            pendingMove = true

            const ratio = Math.min(Math.max(event.clientX / window.innerWidth, 0), 1)
            target = MIN_WEIGHT + ratio * (MAX_WEIGHT - MIN_WEIGHT)

            if (reduceMotion) {
                current = target
                paint()
                return
            }

            requestFrame()
        }

        const handleLeave = () => {
            hasPointer = false
            pendingMove = true
            if (reduceMotion) paint()
            else requestFrame()
        }

        const handleLayoutChange = () => {
            measure()
            pendingMove = true
            if (reduceMotion) paint()
            else requestFrame()
        }

        measure()
        paint()

        // webfont swap changes every glyph's width, so re-measure once Geist is in
        if (document.fonts?.ready) document.fonts.ready.then(measure).catch(() => { })

        window.addEventListener('pointermove', handleMove, { passive: true })
        window.addEventListener('pointerleave', handleLeave)
        window.addEventListener('resize', handleLayoutChange)
        window.addEventListener('scroll', handleLayoutChange, { passive: true })

        return () => {
            window.removeEventListener('pointermove', handleMove)
            window.removeEventListener('pointerleave', handleLeave)
            window.removeEventListener('resize', handleLayoutChange)
            window.removeEventListener('scroll', handleLayoutChange)
            if (frame !== null) cancelAnimationFrame(frame)
        }
    }, [])

    return (
        <>
            <div className="first_fold" ref={foldRef}>
                <div className="content">
                    <Link to='/' className='name_logo_container'><p>tm.</p></Link>
                    <div className='hero_container'>
                        <div className='title_container'>
                            <div className="first_line">
                                <h1>
                                    <span className='gradient_title'>Product Designer</span>
                                </h1>
                                <div className="title">
                                    <h1>{splitChars('with 4 YoE')}</h1>
                                </div>
                            </div>

                            <div className="title">
                                <h1>{splitChars('thrives in 0→1, B2B/Enterprise/SaaS environments')}</h1>
                            </div>
                        </div>
                        <div className="subtitle_container">
                            <div>Currently at<a href="https://dice.tech/" target='blank' ><div className='dice_pill'><img src={dice_logo} alt="logo_dice" />Dice</div></a>now a part of<a href="https://www.zaggle.in/" target='blank' ><div className='dice_pill' style={{ color: '#ED3B41' }}><img src={zaggle_logo} alt="logo_dice" />Zaggle</div></a> </div>
                            <div>solving complex problems of the enterprise spends, finances, and operations space</div>
                        </div>
                        <div className="scroll_cue" ref={cueRef} aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4V20M12 20L5 13M12 20L19 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FirstFold
