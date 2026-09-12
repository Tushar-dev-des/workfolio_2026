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
            transformOrigin: "bottom left",

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
            transformOrigin: "bottom left",

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

        })
        gsap.from('.p1 .index_1', {
            scrollTrigger: {
                trigger: ".p1",
                start: "top 40%",
                end: "top 10%",
                scrub: true,
            },
            filter: "blur(12px)",
            opacity: 0,
        })
        gsap.from('.p2 .index_2', {
            scrollTrigger: {
                trigger: ".p2",
                start: "top 40%",
                end: "top 10%",
                scrub: true,
            },
            filter: "blur(12px)",
            opacity: 0,
        })
        gsap.from('.p3 .index_3', {
            scrollTrigger: {
                trigger: ".p3",
                start: "top 40%",
                end: "top 10%",
                scrub: true,
            },
            filter: "blur(12px)",
            opacity: 0,
        })
        gsap.from('.p4 .index_4', {
            scrollTrigger: {
                trigger: ".p4",
                start: "top 40%",
                end: "top 10%",
                scrub: true,
            },
            filter: "blur(12px)",
            opacity: 0,
        })

        ScrollTrigger.create({
            trigger: ".p1",
            start: "top top",
            endTrigger: ".p1 .project_content .desc",
            end: "top 3%",

            // end: () => {
            //     const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
            //     return `+=${document.querySelector(".p1").offsetHeight - remInPx * 6}`;
            // },
            pin: ".index_1",
            pinSpacing: false,
        })
        ScrollTrigger.create({
            trigger: ".p2",
            start: "top top",
            endTrigger: ".p2 .project_content .desc",
            end: "top 3%",
            // end: () => {
            //     const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
            //     return `+=${document.querySelector(".p1").offsetHeight - remInPx * 6}`;
            // },
            pin: ".index_2",
            pinSpacing: false,
        })
        ScrollTrigger.create({
            trigger: ".p3",
            start: "top top",
            endTrigger: ".p3 .project_content .desc",
            end: "top 3%",
            // end: () => {
            //     const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
            //     return `+=${document.querySelector(".p1").offsetHeight - remInPx * 6}`;
            // },
            pin: ".index_3",
            pinSpacing: false,
        })
        ScrollTrigger.create({
            trigger: ".p4",
            start: "top top",
            endTrigger: ".p4 .project_content .desc",
            end: "top 3%",
            // end: () => {
            //     const remInPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
            //     return `+=${document.querySelector(".p1").offsetHeight - remInPx * 6}`;
            // },
            pin: ".index_4",
            pinSpacing: false,
        })

        // ScrollTrigger.create({
        //     trigger: ".static_footer_container",
        //     start: "top top",
        //     end: "bottom top",
        //     pin: ".static_footer",
        //     pinSpacing: false,
        // });
    }, [])
    return (
        <div className='projects_container'>
            <div className="projects">
                <div className="project p1">
                    <Link to="/projects/1" className="project_content" >
                        <div className="thumbnail">
                        </div>
                        <div className="desc">
                            <h3>DICE Travel: Business travel experience, but a seamless one.</h3>
                            <p>Legacy systems offered rigid workflows, clunky interfaces and an overall fragmented ux. <br /> We designed one, that the business travellers actually needed.</p>
                        </div>
                    </Link>
                    <div className="index_container index_1">
                        <h1 style={{ fontWeight: "300", lineHeight: "1" }}>01</h1>
                        <p style={{ color: "#e4e7ec", lineHeight: "1" }}>/04</p>
                    </div>
                </div>
                <div className="project p2">
                    <div className="index_container index_2">
                        <h1 style={{ fontWeight: "300", lineHeight: "1" }}>02</h1>
                        <p style={{ color: "#e4e7ec", lineHeight: "1" }}>/04</p>
                    </div>
                    <Link to="/projects/2" className="project_content" >
                        <div className="thumbnail">
                        </div>
                        <div className="desc">
                            <h3>Designing <span className='atlas_ai'>Atlas</span> : an AI beyond the usual copilots; for the enterprises</h3>
                            <p>Atlas is an AI experience across the Dice suite, for the complex world of enterprise finances, <br /> that bridges the gap between information, insight, and action.</p>
                        </div>
                    </Link>
                </div>
                <div className="project p3">
                    <Link to="/projects/3" className="project_content">
                        <div className="thumbnail">
                        </div>
                        <div className="desc">
                            <h3>Cleartrip Assured: Better choices for corporate stays</h3>
                            <p>It was difficult for business travellers to find the best stays for their trips; <br /> Cleartrip assured is a curated collection of stays, handpicked & best-suited for them.</p>
                        </div>
                    </Link>
                    <div className="index_container index_3">
                        <h1 style={{ fontWeight: "300", lineHeight: "1" }}>03</h1>
                        <p style={{ color: "#e4e7ec", lineHeight: "1" }}>/04</p>
                    </div>
                </div>
                <div className="project p4">
                    <div className="index_container index_4">
                        <h1 style={{ fontWeight: "300", lineHeight: "1" }}>04</h1>
                        <p style={{ color: "#e4e7ec", lineHeight: "1" }}>/04</p>
                    </div>
                    <Link to="/projects/4" className="project_content" >
                        <div className="thumbnail">
                        </div>
                        <div className="desc">
                            <h3>The Upstox files</h3>
                            <p>A collection of all of my work when I was at upstox</p>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Projects