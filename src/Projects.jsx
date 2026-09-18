import './Projects.css'
import { Link } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, useGSAP);



const Projects = () => {
    useGSAP(() => {
        gsap.from('.p1 .project_content .thumbnail', {
            scrollTrigger: {
                trigger: ".p1",
                start: "top 90%",
                end: "top 50%",
                scrub: true,
            },
            scale: 0.92,
            filter: "blur(12px)",
            opacity: 0.7,
            transformOrigin: "bottom right",

        })
        gsap.from('.p2 .project_content .thumbnail', {
            scrollTrigger: {
                trigger: ".p2",
                start: "top 90%",
                end: "top 50%",
                scrub: true,
            },
            scale: 0.92,
            filter: "blur(12px)",
            opacity: 0.7,
            transformOrigin: "bottom right",

        })
        gsap.from('.p3 .project_content .thumbnail', {
            scrollTrigger: {
                trigger: ".p3",
                start: "top 90%",
                end: "top 50%",
                scrub: true,
            },
            scale: 0.92,
            filter: "blur(12px)",
            opacity: 0.7,
            transformOrigin: "bottom right",

        })
        gsap.from('.p4 .project_content .thumbnail', {
            scrollTrigger: {
                trigger: ".p4",
                start: "top 90%",
                end: "top 50%",
                scrub: true,
            },
            scale: 0.92,
            filter: "blur(12px)",
            opacity: 0.7,
            transformOrigin: "bottom right",
            // borderRadius: "100% 0 0 0",

        })
        gsap.from('.p1 .index_1', {
            scrollTrigger: {
                trigger: ".p1",
                start: "top 70%",
                end: "top 30%",
                scrub: true,
            },
            filter: "blur(12px)",
            opacity: 0,
        })
        gsap.from('.p2 .index_2', {
            scrollTrigger: {
                trigger: ".p2",
                start: "top 70%",
                end: "top 30%",
                scrub: true,
            },
            filter: "blur(12px)",
            opacity: 0,
        })
        gsap.from('.p3 .index_3', {
            scrollTrigger: {
                trigger: ".p3",
                start: "top 70%",
                end: "top 30%",
                scrub: true,
            },
            filter: "blur(12px)",
            opacity: 0,
        })
        gsap.from('.p4 .index_4', {
            scrollTrigger: {
                trigger: ".p4",
                start: "top 70%",
                end: "top 30%",
                scrub: true,
            },
            filter: "blur(12px)",
            opacity: 0,
        })



        // gsap.to(".index_1", {
        //     scrollTrigger: {
        //         trigger: ".p1",
        //         start: "top top",
        //         endTrigger: ".p1 .project_content .thumbnail",
        //         end: "bottom 20%",
        //         pin: ".index_1",
        //         pinSpacing: false,
        //         toggleActions: "play none none reverse",
        //     },
        //     opacity: 1,
        //     ease: "none",
        //     duration: 0.1,
        // });
        // gsap.to(".index_2", {
        //     scrollTrigger: {
        //         trigger: ".p2",
        //         start: "top top",
        //         endTrigger: ".p2 .project_content .thumbnail",
        //         end: "bottom 20%",
        //         pin: ".index_2",
        //         pinSpacing: false,
        //         toggleActions: "play none none reverse",
        //     },
        //     opacity: 1,
        //     ease: "none",
        //     duration: 0.1,
        // });
        // gsap.to(".index_3", {
        //     scrollTrigger: {
        //         trigger: ".p3",
        //         start: "top top",
        //         endTrigger: ".p3 .project_content .thumbnail",
        //         end: "bottom 20%",
        //         pin: ".index_3",
        //         pinSpacing: false,
        //         toggleActions: "play none none reverse",
        //     },
        //     opacity: 1,
        //     ease: "none",
        //     duration: 0.1,
        // });
        // gsap.to(".index_4", {
        //     scrollTrigger: {
        //         trigger: ".p4",
        //         start: "top top",
        //         endTrigger: ".p4 .project_content .thumbnail",
        //         end: "bottom 20%",
        //         pin: ".index_4",
        //         pinSpacing: false,
        //         toggleActions: "play none none reverse",
        //     },
        //     opacity: 1,
        //     ease: "none",
        //     duration: 0.1,
        // });


        ScrollTrigger.create({
            trigger: ".p1",
            start: "top top",
            endTrigger: ".p1 .project_content .thumbnail",
            end: "bottom 20%",
            pin: ".index_1",
            pinSpacing: false,
        })
        ScrollTrigger.create({
            trigger: ".p2",
            start: "top top",
            endTrigger: ".p2 .project_content .thumbnail",
            end: "bottom 20%",
            pin: ".index_2",
            pinSpacing: false,
        })

        ScrollTrigger.create({
            trigger: ".p3",
            start: "top top",
            endTrigger: ".p3 .project_content .thumbnail",
            end: "bottom 20%",
            pin: ".index_3",
            pinSpacing: false,
        })

        ScrollTrigger.create({
            trigger: ".p4",
            start: "top top",
            endTrigger: ".p4 .project_content .thumbnail",
            end: "bottom 20%",
            pin: ".index_4",
            pinSpacing: false,
        })
    }, [])
    return (
        <div className='projects_container'>
            <div className="projects">
                <div className="project p1">
                    <div className="index_container index_1">
                        <h1 style={{ fontWeight: "200", lineHeight: "1", paddingLeft: "0.75rem" }}>01</h1>
                        <div className="desc">
                            <h3>DICE Travel: Business travel experience, but a seamless one.</h3>
                            {/* <p>Legacy systems offered rigid workflows, clunky interfaces and an overall fragmented ux. <br /> We designed one, that the business travellers actually needed.</p> */}
                        </div>
                    </div>
                    <Link to="/projects/1" className="project_content" >
                        <div className="thumbnail">
                        </div>
                    </Link>
                </div>
                <div className="project p2">
                    <div className="index_container index_2">
                        <h1 style={{ fontWeight: "200", lineHeight: "1", paddingLeft: "0.75rem" }}>02</h1>
                        <div className="desc">
                            <h3>Designing <span className='atlas_ai'>Atlas</span> : an AI beyond the usual copilots; for the enterprises</h3>
                            {/* <p>Atlas is an AI experience across the Dice suite, for the complex world of enterprise finances, <br /> that bridges the gap between information, insight, and action.</p> */}
                        </div>
                    </div>
                    <Link to="/projects/2" className="project_content" >
                        <div className="thumbnail">
                        </div>

                    </Link>
                </div>
                <div className="project p3">
                    <div className="index_container index_3">
                        <h1 style={{ fontWeight: "200", lineHeight: "1", paddingLeft: "0.75rem" }}>03</h1>
                        <div className="desc">
                            <h3>Cleartrip Assured: Better choices for corporate stays</h3>
                            {/* <p>It was difficult for business travellers to find the best stays for their trips; <br /> Cleartrip assured is a curated collection of stays, handpicked & best-suited for them.</p> */}
                        </div>
                    </div>
                    <Link to="/projects/3" className="project_content">
                        <div className="thumbnail">
                        </div>

                    </Link>
                </div>
                <div className="project p4">
                    <div className="index_container index_4">
                        <h1 style={{ fontWeight: "200", lineHeight: "1", paddingLeft: "0.75rem" }}>04</h1>
                        <div className="desc">
                            <h3>The Upstox files</h3>
                            {/* <p>A collection of all of my work when I was at upstox</p> */}
                        </div>
                    </div>
                    <Link to="/projects/4" className="project_content" >
                        <div className="thumbnail">
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Projects