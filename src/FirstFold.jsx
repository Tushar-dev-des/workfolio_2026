import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import dice_logo from './assets/logo_dice.svg'
import zaggle_logo from './assets/zaggle_logo.svg'
import './FirstFold.css'
import { Link } from 'react-router-dom'

const MIN_WEIGHT = 100
const MAX_WEIGHT = 900

// how far the cursor's pull reaches, how far a letter rises at the centre of it, and how
// much weight the pressure adds there
const RIPPLE_RADIUS = 150
const RIPPLE_LIFT = 12
const RIPPLE_BOOST = 400

// the resting weight of the .title lines — must match `font-weight` on `.title h1`, since
// the pressure is measured up from it
const TITLE_WEIGHT = 300

const SCROLL_CUE_THRESHOLD = 40

const FULL_NAME = 'tushar mahajan'

// Splits a string into per-character spans so each letter can be lifted on its own.
// Spaces stay as bare text nodes: they have no glyph to lift, and leaving them out
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
    const logoRef = useRef(null)

    useEffect(() => {
        const logo = logoRef.current
        if (!logo) return

        const short = logo.querySelector('.logo_short')
        const letters = Array.from(logo.querySelectorAll('.logo_letter'))
        if (!short || letters.length === 0) return

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const targets = [short, ...letters]

        // The two layers only stay clear of each other if the leaving edge exactly meets the
        // arriving edge at every instant, and that holds only when both move on identical
        // timing. Any difference in duration or ease makes them overlap mid-flight.
        const DURATION = 0.5
        const EASE = 'power3.inOut'
        const STAGGER = 0.02

        // On the way out 'tm.' has to wait for the letters it physically sits behind. Only the
        // few letters within its horizontal span can collide; the rest are further right and
        // never could, so the delay is measured rather than assuming the whole word.
        let exitDelay = 0
        const measureExitDelay = () => {
            const shortRight = short.getBoundingClientRect().right
            const collisions = letters.filter((letter) => letter.getBoundingClientRect().left < shortRight)
            exitDelay = Math.max(0, collisions.length - 1) * STAGGER
        }

        measureExitDelay()
        if (document.fonts?.ready) document.fonts.ready.then(measureExitDelay).catch(() => { })

        // The name waits just below the mask; nothing is ever animated downwards.
        gsap.set(letters, { yPercent: 100 })

        const roll = (reveal) => {
            gsap.killTweensOf(targets)

            if (reduceMotion) {
                gsap.set(short, { yPercent: reveal ? -100 : 0 })
                gsap.set(letters, { yPercent: reveal ? 0 : 100 })
                return
            }

            if (reveal) {
                // 'tm.' is pushed up out of the top; the name rises into the space it leaves.
                // Parking it below on completion is what lets the exit below also travel upward.
                gsap.to(short, {
                    yPercent: -100, duration: DURATION, ease: EASE,
                    onComplete: () => gsap.set(short, { yPercent: 100 }),
                })
                gsap.to(letters, { yPercent: 0, duration: DURATION, ease: EASE, stagger: STAGGER })
                return
            }

            // Leaving keeps the same upward direction: the name exits through the top while
            // 'tm.' comes back around from underneath, trailing the letters it sits behind.
            gsap.to(letters, {
                yPercent: -100, duration: DURATION, ease: EASE, stagger: STAGGER,
                onComplete: () => gsap.set(letters, { yPercent: 100 }),
            })
            gsap.to(short, { yPercent: 0, duration: DURATION, ease: EASE, delay: exitDelay })
        }

        // `gsap.to` from wherever the letters currently are, rather than a hard fromTo start,
        // so re-entering mid-exit picks up the motion instead of snapping.
        const enter = () => roll(true)
        const leave = () => roll(false)

        logo.addEventListener('pointerenter', enter)
        logo.addEventListener('pointerleave', leave)
        logo.addEventListener('focus', enter)
        logo.addEventListener('blur', leave)

        return () => {
            logo.removeEventListener('pointerenter', enter)
            logo.removeEventListener('pointerleave', leave)
            logo.removeEventListener('focus', enter)
            logo.removeEventListener('blur', leave)
            gsap.killTweensOf(targets)
        }
    }, [])

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

        // Cursor X drives `--title-weight`, which only `.gradient_title` consumes. The
        // `.title` lines hold a fixed resting weight and instead gain weight locally, from
        // the cursor's pressure within RIPPLE_RADIUS.
        let target = (MIN_WEIGHT + MAX_WEIGHT) / 2
        let current = target
        let pointerX = 0
        let pointerY = 0
        let hasPointer = false
        let pendingMove = false
        let frame = null

        // Centres are cached rather than read every frame, since measuring every letter
        // forces a reflow. They go stale in two ways: the pressure changes letter widths,
        // and the gradient title shares a flex row with 'with over 3+ YoE' so its own
        // changing width shifts those letters sideways. Hence the re-measure once settled.
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

                if (!influence) {
                    el.style.transform = ''
                    el.style.fontVariationSettings = ''
                    continue
                }

                const weight = Math.min(TITLE_WEIGHT + influence * RIPPLE_BOOST, MAX_WEIGHT)
                el.style.fontVariationSettings = `'wght' ${weight.toFixed(1)}`
                el.style.transform = `translateY(${(-influence * RIPPLE_LIFT).toFixed(2)}px)`
            }
        }

        const tick = () => {
            // ease toward the pointer so the gradient weight glides instead of snapping
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
                    <Link to='/' className='name_logo_container' ref={logoRef} aria-label="Tushar Mahajan">
                        <p>
                            <span className="logo_short">tm.</span>
                            {/* parked below the mask until hover, then rolled up letter by letter */}
                            <span className="logo_full" aria-hidden="true">
                                {Array.from(FULL_NAME).map((character, index) => (
                                    <span className="logo_letter" key={index}>
                                        {character === ' ' ? '\u00A0' : character}
                                    </span>
                                ))}
                            </span>
                        </p>
                    </Link>
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
