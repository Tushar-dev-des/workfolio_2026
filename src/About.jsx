import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all"
import './About.css'
// import puzzleOne from './assets/puzzle_one.svg'
// import puzzleTwo from './assets/puzzle_two.svg'
// import puzzleThree from './assets/puzzle_three.svg'
// import puzzleFour from './assets/puzzle_four.svg'
// import puzzleFive from './assets/puzzle_five.svg'
import puzzleOne from './assets/puzzle_one_copy.svg'
import puzzleTwo from './assets/puzzle_two_copy.svg'
import puzzleThree from './assets/puzzle_three_copy.svg'
import puzzleFour from './assets/puzzle_four_copy.svg'
import puzzleFive from './assets/puzzle_five_copy.svg'

gsap.registerPlugin(ScrollTrigger, useGSAP);

// The only mark in the field now — drawn inline so it inherits `currentColor`.
// const QUESTION_MARK = <><path d="M9 9a3 3 0 015.9.8c0 2-2.9 2.6-2.9 4.7" /><path d="M12 18.6h.01" /></>;

// const ICON_COUNT = 15;

// Deterministic PRNG (mulberry32). At this count a hand-written table would be 40 rows of
// near-identical noise, but plain Math.random() would redraw the field on every reload —
// this gives a scatter that is random-looking yet identical on every visit.
// const createRandom = (seed) => () => {
//     seed = (seed + 0x6D2B79F5) | 0;
//     let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
//     t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
//     return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
// };

// const random = createRandom(20260923);
// const between = (min, max) => min + random() * (max - min);

// const TOP_RANGE = 195;
// const MAX_SPEED = 1.65;

// Tops are stratified into one band per icon rather than drawn freely, so 40 marks cannot
// clump or leave gaps; the jitter inside each band is what keeps it from looking like a grid.
// const FLOATING_ICONS = Array.from({ length: ICON_COUNT }, (_, index) => {
//     const band = TOP_RANGE / ICON_COUNT;
//     const top = index * band + between(0, band);

    // An icon starting below the fold needs enough travel to reach the viewport at all:
    // travel = 1.6 x viewport height x speed, so deep starters get a raised speed floor.
//     const speed = between(Math.max(0.35, (top - 85) / 160), MAX_SPEED);

//     return {
//         left: between(2, 90),
//         top,
//         speed,
//         rotate: between(-28, 28),
//         opacity: between(0.16, 0.42),
//         drift: between(5.5, 8.5),
//         delay: between(0, 3),
//     };
// });

// Size follows speed so the parallax reads as depth rather than as an arbitrary jumble:
// the fast (near) icons are large, the slow (far) ones small. Snapped to a fixed set of
// steps rather than interpolated, so the field reads as a handful of distinct depth
// planes instead of twenty slightly-different sizes.
// const ICON_SIZES = [16, 24, 40, 72, 100];
// const SPEEDS = FLOATING_ICONS.map((item) => item.speed);
// const SLOWEST = Math.min(...SPEEDS);
// const FASTEST = Math.max(...SPEEDS);

// const ICON_SIZE_FOR_SPEED = (speed) => {
//     const depth = (speed - SLOWEST) / (FASTEST - SLOWEST);
//     const step = Math.floor(depth * ICON_SIZES.length);
//     return ICON_SIZES[Math.min(step, ICON_SIZES.length - 1)];
// };

const About = () => {

    useGSAP(() => {

        const aboutSplit = new SplitText(".about_content", { type: "words" });

        // gsap.to('.puzzle_container', {
        //     scrollTrigger: {
        //         trigger: ".third_fold",
        //         start: "top 0%",
        //         end: "top -60%",
        //         scrub: true,
        //         toggleActions: "play none none reverse",
        //     },
        //     background: "linear-gradient(-30deg, #080616 20%, #0f0b28 100%)",
        // })

        gsap.from('.puzzle_item', {
            scrollTrigger: {
                trigger: ".puzzle_container",
                start: "top 20%",
                end: "top -150%",
                scrub: true,
            },
            opacity: 0,
            stagger: 0.1,
            y: 150,
        })

        gsap.from('.missing_item_one', {
            scrollTrigger: {
                trigger: ".puzzle_container",
                start: "top -120%",
                end: "top -300%",
                scrub: true,
            },

            opacity: 0,
            stagger: 0.1,
            y: -200,
            x: 200,
            rotation: -45,
            filter: "blur(10px)"
        })

        gsap.from('.missing_item_two', {
            scrollTrigger: {
                trigger: ".puzzle_container",
                start: "top -180%",
                end: "top -380%",
                scrub: true,
            },

            opacity: 0,
            stagger: 0.1,
            y: 200,
            x: 200,
            rotation: 45,
            filter: "blur(10px)"
        })

        gsap.to('.puzzle', {

            scrollTrigger: {
                trigger: ".third_fold",
                start: "bottom 120%",
                toggleActions: "play none none reverse",
            },
            opacity: 0.7,
            ease: "none",
            duration: 0.2,
        })
        gsap.from('.float_layer', {
            scrollTrigger: {
                trigger: ".third_fold",
                start: "top 30%",
                end: "top -150%",
                toggleActions: "play none none reverse",
                scrub: true,
            },
            opacity: 0,
        })

        ScrollTrigger.create({
            trigger: ".puzzle_container",
            start: "top top",
            pin: true,
            endTrigger: ".third_fold",
            end: "bottom bottom",
            pinSpacing: false,
        });

        ScrollTrigger.create({
            trigger: ".about_container",
            start: "top top",
            pin: true,
            endTrigger: ".third_fold",
            end: "bottom bottom",
            pinSpacing: false,
        });

        gsap.from(aboutSplit.words, {
            scrollTrigger: {
                trigger: ".third_fold",
                start: "top -100%",
                end: "bottom bottom",
                scrub: true,
            },
            opacity: 0,
            stagger: {
                each: 0.05,
                // from: "random",
            },
            y: 50,
            x: 20,
            rotation: 20,
            filter: "blur(15px)"
        });

        gsap.from('.about', {
            scrollTrigger: {
                trigger: ".third_fold",
                start: "top -100%",
                end: "bottom bottom",
                scrub: true,
            },
            scale: 0.8,
        })

        // Each icon drifts up by its own multiple of the scroll distance, so they separate
        // into depth layers instead of moving as one sheet. At 40 icons this runs as a single
        // ScrollTrigger writing through quickSetters rather than 40 scrubbed tweens — Lenis
        // already smooths the scroll, so the per-tween scrub lag is not needed.
        // const floaters = gsap.utils.toArray('.float_item').map((item) => ({
        //     setY: gsap.quickSetter(item, "y", "px"),
        //     speed: Number(item.dataset.speed) || 1,
        // }));

        // ScrollTrigger.create({
        //     trigger: ".third_fold",
        //     start: "top top",
        //     end: "bottom bottom",
        //     invalidateOnRefresh: true,
        //     onUpdate: (self) => {
        //         const travel = window.innerHeight * 1.6 * self.progress;
        //         floaters.forEach((floater) => floater.setY(-travel * floater.speed));
        //     },
        // });

    }, []);

    return (
        <div className="third_fold">
            <div className="puzzle_container">
                {/* <div className="float_layer" aria-hidden="true">
                    {FLOATING_ICONS.map((item, index) => (
                        <div
                            key={index}
                            className="float_item"
                            data-speed={item.speed}
                            style={{ left: `${item.left}%`, top: `${item.top}%` }}
                        > */}
                            {/* inner wrapper owns the idle drift so it does not fight GSAP's parallax transform */}
                            {/* <div
                                className="float_drifter"
                                style={{ animationDuration: `${item.drift}s`, animationDelay: `${item.delay}s` }}
                            >
                                <svg
                                    width={ICON_SIZE_FOR_SPEED(item.speed)}
                                    height={ICON_SIZE_FOR_SPEED(item.speed)}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ opacity: item.opacity, transform: `rotate(${item.rotate}deg)` }}
                                >
                                    {QUESTION_MARK}
                                </svg>
                            </div>
                        </div>
                    ))}
                </div> */}
                <div className="puzzle">
                    <div className="puzzle_item_one puzzle_item"><img src={puzzleOne} alt="" /></div>
                    <div className="puzzle_item_two puzzle_item"><img src={puzzleTwo} alt="" /></div>
                    <div className="puzzle_item_three missing_item_one"><img src={puzzleThree} alt="" /></div>
                    <div className="puzzle_item_four puzzle_item"><img src={puzzleFour} alt="" /></div>
                    <div className="puzzle_item_five missing_item_two"><img src={puzzleFive} alt="" /></div>
                </div>
            </div>
            <div className="about_container">
                <div className="about">
                    {/* <div className="about_content" style={{ textAlign: 'left', maxWidth: '80%' }}> */}
                    <div className="about_content">
                        {/* <br />
                        <br /> */}
                        Over the years, I've developed & practised my own way of approaching problems.
                    </div>
                    {/* <div className="about_content" style={{ textAlign: 'left', maxWidth: '80%', alignSelf: 'flex-end' }}> */}
                    <div className="about_content">
                        I see them as a crucial moment inside an unfinished story, <br /> at the centre along with the user, and our job now is to complete their story as seamlessly and effortlessly as possible, <br /> by connecting the right dots.
                    </div>
                    {/* <div className="about_content action">Read my complete approach</div> */}
                </div>
            </div>

        </div>
    );
};

export default About;
