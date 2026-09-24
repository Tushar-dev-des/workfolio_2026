import { useEffect, useRef } from 'react'
import cursorArrow from './assets/custom_cursor.svg'
import cursorHand from './assets/Pointer.svg'
import './CustomCursor.css'

// Each cursor's hotspot — the point that must sit exactly under the real pointer, the way
// a native cursor's does. Held as a FRACTION of the artboard, not as pixels, because the
// two graphics are drawn on different artboards (56 and 32) and both are rendered into the
// same box: the arrow's tip is at 10/56 across, the hand's fingertip at 11/32.
const HOTSPOTS = {
    arrow: { x: 10 / 56, y: 4 / 56 },
    hand: { x: 11 / 32, y: 2 / 32 },
}

const CustomCursor = () => {
    const cursorRef = useRef(null)

    useEffect(() => {
        const cursor = cursorRef.current
        if (!cursor) return

        // Only on real pointers. A touch device has no cursor to replace, and hiding the
        // native one there would leave a stray arrow parked wherever the last tap landed.
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

        const root = document.documentElement
        root.classList.add('has_custom_cursor')

        let hotspot = HOTSPOTS.arrow

        // The rendered size is cached rather than read per move: offsetWidth forces layout,
        // and this would otherwise run a reflow on every pointer event.
        let size = cursor.offsetWidth
        const measureSize = () => { size = cursor.offsetWidth }

        // Written straight from the pointer event rather than through rAF: a frame of
        // latency is plainly visible on something the eye is already tracking.
        const move = (event) => {
            cursor.style.transform = `translate3d(${event.clientX - hotspot.x * size}px, ${event.clientY - hotspot.y * size}px, 0)`
            cursor.classList.add('is_visible')
        }

        const hide = () => cursor.classList.remove('is_visible')

        // One delegated listener. `pointerover` fires on every element the pointer enters,
        // so walking up to the nearest labelled ancestor covers entering AND leaving:
        // moving off a thumbnail lands on something unlabelled, which clears the pill.
        const label = cursor.querySelector('.custom_cursor_label')
        const syncCursor = (event) => {
            const marked = event.target?.closest?.('[data-cursor], [data-cursor-label]')

            // Both graphics are always in the DOM and swapped with a class, so changing
            // shape never waits on a network fetch the way re-pointing `src` would.
            const wantsHand = marked?.dataset.cursor === 'pointer'
            hotspot = wantsHand ? HOTSPOTS.hand : HOTSPOTS.arrow
            cursor.classList.toggle('is_pointer', wantsHand)

            const text = marked?.dataset.cursorLabel
            if (!text) {
                cursor.classList.remove('is_labelled')
                return
            }

            if (label.textContent !== text) label.textContent = text
            cursor.classList.add('is_labelled')
        }

        document.addEventListener('pointerover', syncCursor, { passive: true })
        window.addEventListener('resize', measureSize)
        window.addEventListener('pointermove', move, { passive: true })
        window.addEventListener('pointerdown', move, { passive: true })
        document.addEventListener('pointerleave', hide)
        window.addEventListener('blur', hide)

        return () => {
            root.classList.remove('has_custom_cursor')
            document.removeEventListener('pointerover', syncCursor)
            window.removeEventListener('resize', measureSize)
            window.removeEventListener('pointermove', move)
            window.removeEventListener('pointerdown', move)
            document.removeEventListener('pointerleave', hide)
            window.removeEventListener('blur', hide)
        }
    }, [])

    return (
        <div className="custom_cursor" aria-hidden="true" ref={cursorRef}>
            <img src={cursorArrow} alt="" className="custom_cursor_arrow" />
            <img src={cursorHand} alt="" className="custom_cursor_hand" />
            <span className="custom_cursor_label" />
        </div>
    )
}

export default CustomCursor
