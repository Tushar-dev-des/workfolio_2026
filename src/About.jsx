import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all"
import './About.css'
import puzzleOne from './assets/puzzle_one.svg'
import puzzleTwo from './assets/puzzle_two.svg'
import puzzleThree from './assets/puzzle_three.svg'
import puzzleFour from './assets/puzzle_four.svg'
import puzzleFive from './assets/puzzle_five.svg'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {

    useGSAP(() => {

        const aboutSplit = new SplitText(".about_content", { type: "words" });

        gsap.from('.puzzle_item', {
            scrollTrigger: {
                trigger: ".puzzle_container",
                start: "top 0%",
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
        })

        gsap.to('.puzzle', {

            scrollTrigger: {
                trigger: ".third_fold",
                start: "bottom 140%",
                toggleActions: "play none none reverse",
            },
            opacity: 1,
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
            stagger: 0.06,
            y: 30,
            rotation: 15,
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


    }, []);

    return (
        <div className="third_fold">
            <div className="puzzle_container">
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
                        As a keen observer, I've developed & practised my own way of approaching problems.
                    </div>
                    {/* <div className="about_content" style={{ textAlign: 'left', maxWidth: '80%', alignSelf: 'flex-end' }}> */}
                    <div className="about_content">
                        I see them as a crucial moment inside an unfinished story; <br /> the user being already present at that moment, and our job now is to complete that story as seamlessly and effortlessly as possible, <br /> by connecting the right dots.
                    </div>
                    {/* <div className="about_content action">Read my complete approach</div> */}
                </div>
            </div>

        </div>
    );
};

export default About;
