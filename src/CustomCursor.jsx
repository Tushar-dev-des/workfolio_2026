import { useEffect, useRef } from 'react'
import cursorArrow from './assets/custom_cursor.svg'
import './CustomCursor.css'

// The arrow's tip inside its 56x56 artboard. The element is offset by this so the point
// of the arrow sits exactly where the pointer is, the way a native cursor's hotspot does.
const HOTSPOT_X = 10
const HOTSPOT_Y = 4

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

        // Written straight from the pointer event rather than through rAF: a frame of
        // latency is plainly visible on something the eye is already tracking.
        const move = (event) => {
            cursor.style.transform =
                `translate3d(${event.clientX - HOTSPOT_X}px, ${event.clientY - HOTSPOT_Y}px, 0)`
            cursor.classList.add('is_visible')
        }

        const hide = () => cursor.classList.remove('is_visible')

        // One delegated listener. `pointerover` fires on every element the pointer enters,
        // so walking up to the nearest labelled ancestor covers entering AND leaving:
        // moving off a thumbnail lands on something unlabelled, which clears the pill.
        const label = cursor.querySelector('.custom_cursor_label')
        const syncLabel = (event) => {
            const text = event.target?.closest?.('[data-cursor-label]')?.dataset.cursorLabel

            if (!text) {
                cursor.classList.remove('is_labelled')
                return
            }

            if (label.textContent !== text) label.textContent = text
            cursor.classList.add('is_labelled')
        }

        document.addEventListener('pointerover', syncLabel, { passive: true })
        window.addEventListener('pointermove', move, { passive: true })
        window.addEventListener('pointerdown', move, { passive: true })
        document.addEventListener('pointerleave', hide)
        window.addEventListener('blur', hide)

        return () => {
            root.classList.remove('has_custom_cursor')
            document.removeEventListener('pointerover', syncLabel)
            window.removeEventListener('pointermove', move)
            window.removeEventListener('pointerdown', move)
            document.removeEventListener('pointerleave', hide)
            window.removeEventListener('blur', hide)
        }
    }, [])

    return (
        <div className="custom_cursor" aria-hidden="true" ref={cursorRef}>
            <img src={cursorArrow} alt="" className="custom_cursor_arrow" />
            <span className="custom_cursor_label" />
        </div>
    )
}

export default CustomCursor
