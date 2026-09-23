import './Projects.css'
import { Link } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

import project_one_video from "./assets/project_one.mp4"

gsap.registerPlugin(ScrollTrigger, useGSAP);



const Projects = () => {
    useGSAP(() => {
        gsap.from('.p0 .project_content .thumbnail', {
            scrollTrigger: {
                trigger: ".p0",
                start: "top 90%",
                end: "top 50%",
                scrub: true,
            },
            scale: 0.92,
            filter: "blur(12px)",
            opacity: 0.7,
            transformOrigin: "bottom right",

        })
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
        gsap.from('.p0 .index_0', {
            scrollTrigger: {
                trigger: ".p0",
                start: "top 70%",
                end: "top 30%",
                scrub: true,
            },
            filter: "blur(12px)",
            opacity: 0,
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


        // ScrollTrigger.create({
        //     trigger: ".p1",
        //     start: "top top",
        //     endTrigger: ".p1 .project_content .thumbnail",
        //     end: "bottom 36%",
        //     pin: ".index_1",
        //     pinSpacing: false,
        // })
        // ScrollTrigger.create({
        //     trigger: ".p2",
        //     start: "top top",
        //     endTrigger: ".p2 .project_content .thumbnail",
        //     end: "bottom 36%",
        //     pin: ".index_2",
        //     pinSpacing: false,
        // })

        // ScrollTrigger.create({
        //     trigger: ".p3",
        //     start: "top top",
        //     endTrigger: ".p3 .project_content .thumbnail",
        //     end: "bottom 32%",
        //     pin: ".index_3",
        //     pinSpacing: false,
        // })

        // ScrollTrigger.create({
        //     trigger: ".p4",
        //     start: "top top",
        //     endTrigger: ".p4 .project_content .thumbnail",
        //     end: "bottom 32%",
        //     pin: ".index_4",
        //     pinSpacing: false,
        // })
    }, [])
    return (
        <div className='projects_container'>
            <div className="projects">
                <div className="project p0">
                    <div className="index_container index_0">
                        <div className="highlight"></div>
                        {/* <h1 style={{ fontWeight: "200", lineHeight: "1", marginLeft: "1.25rem" }}>01</h1> */}
                        <div className="desc" style={{ borderBottom: "1px solid #11111010", padding: "2rem 0" }}>
                            <h3>DICE P2P(procure-to-pay) & AP(accounts payable) : <br /> <span style={{ fontWeight: "300" }}>Business travel experience, but a seamless one.</span></h3>
                        </div>
                        <div className="desc">
                            <h3 >P2P & AP<br /> <span style={{ fontWeight: "300", color: "#344054" }}>for the enterprises</span></h3>
                        </div>
                        <div className="desc">
                            
                            <h3 ><span style={{ fontWeight: "300", color: "#344054" }}>work in progress...</span></h3>
                        </div>
                    </div>
                    <Link to="/" className="project_content" >
                        <div className="thumbnail">
                            {/* <video src={project_zero_video} autoPlay loop playsInline muted className="project_zero_video"></video> */}
                        </div>
                    </Link>
                </div>
                <div className="project p1">
                    <div className="index_container index_1">
                        <div className="highlight"></div>
                        {/* <h1 style={{ fontWeight: "200", lineHeight: "1", marginLeft: "1.25rem" }}>01</h1> */}
                        <div className="desc" style={{ borderBottom: "1px solid #11111010", padding: "2rem 0" }}>
                            <h3>DICE Travel : <br /> <span style={{ fontWeight: "300" }}>Business travel experience, but a seamless one.</span></h3>
                        </div>
                        <div className="desc">
                            <h1 >2.5x</h1>
                            <h3 style={{ fontWeight: "300", lineHeight: "1.5" }}>total flight bookings</h3>
                            <h3 style={{ fontWeight: "300", lineHeight: "1.5" }}>in 45 days</h3>
                        </div>
                        {/* <div className="desc">
                            <h1 >drove expansion</h1>
                            <h3 style={{ fontWeight: "300", lineHeight: "1.5" }}>product attracted major acquisitions</h3>
                        </div> */}
                        <div className="desc">
                            <h3 >drove expansion<br /> <span style={{ fontWeight: "300", color: "#344054" }}>product attracted major acquisitions</span></h3>
                        </div>
                    </div>
                    <Link to="/projects/1" className="project_content" >
                        <div className="thumbnail">
                            <video src={project_one_video} autoPlay loop playsInline muted className="project_one_video"></video>
                        </div>
                    </Link>
                </div>
                <div className="project p2">
                    <div className="index_container index_2">
                        <div className="highlight"></div>
                        {/* <h1 style={{ fontWeight: "200", lineHeight: "1", marginLeft: "1.25rem" }}>02</h1> */}
                        <div className="desc" style={{ borderBottom: "1px solid #11111010", padding: "2rem 0" }}>
                            <h3>Designing <span className='atlas_ai'>Atlas</span>  : <br /> <span style={{ fontWeight: "300" }}>an AI beyond the usual copilots; for the enterprises</span></h3>
                        </div>
                        <div className="desc">
                            <h3 ><span style={{ fontWeight: "300", color: "#344054" }}>&quot; Atlas is an AI experience across the Dice suite, for the complex world of enterprise finances, <br /> that bridges the gap between information, insight, and action. &quot;</span></h3>
                        </div>
                        <div className="desc">
                            
                            <h3 ><span style={{ fontWeight: "300", color: "#344054" }}>work in progress...</span></h3>
                        </div>
                    </div>
                    <Link to="/" className="project_content" >
                        <div className="thumbnail">
                        </div>

                    </Link>
                </div>
                <div className="project p3">
                    <div className="index_container index_3">
                        <div className="highlight"></div>
                        {/* <h1 style={{ fontWeight: "200", lineHeight: "1", marginLeft: "1.25rem" }}>03</h1> */}
                        <div className="desc" style={{ borderBottom: "1px solid #11111010", padding: "2rem 0" }}>
                            <h3>Cleartrip Assured : <br /> <span style={{ fontWeight: "300" }}>Better choices for corporate stays</span></h3>
                        </div>
                        <div className="desc">
                            <h1 >89%</h1>
                            <h3 style={{ fontWeight: "300", lineHeight: "1.5" }}>selection rate</h3>
                        </div>
                        <div className="desc">
                            <h1 >₹1.2 Cr</h1>
                            <h3 style={{ fontWeight: "300", lineHeight: "1.5" }}>saved in missed GST claims</h3>
                            <h3 style={{ fontWeight: "300", lineHeight: "1.5" }}>each Quarter</h3>
                        </div>
                    </div>
                    <Link to="/projects/3" className="project_content">
                        <div className="thumbnail">
                        </div>

                    </Link>
                </div>
                <div className="project p4">
                    <div className="index_container index_4">
                        <div className="highlight"></div>
                        {/* <h1 style={{ fontWeight: "200", lineHeight: "1", marginLeft: "1.25rem" }}>04</h1> */}
                        <div className="desc" style={{ borderBottom: "1px solid #11111010", padding: "2rem 0" }}>
                            <h3>My work at Upstox : <br /> <span style={{ fontWeight: "300" }}>Gold investment, Order forms, corporate actions</span></h3>
                        </div>
                        <div className="desc">
                            <h3 >expansion <br /> <span style={{ fontWeight: "300", color: "#344054" }}>to new user segment and asset class</span></h3>
                        </div>
                        <div className="desc">
                            <h3 >reduced drop-offs<br /> <span style={{ fontWeight: "300", color: "#344054" }}>at stock buying order forms</span></h3>
                        </div>
                        <div className="desc">
                            <h3 >improved discovery<br /> <span style={{ fontWeight: "300", color: "#344054" }}>of corporate action announcements</span></h3>
                        </div>
                    </div>
                    <Link to="/projects/4" className="project_content" >
                        <div className="thumbnail">
                        </div>
                    </Link>
                </div>
                <div className="project" style={{ height: "9.5rem", background: "#fdf9f6", marginTop: "-4rem", border: "1px solid #11111010" }}>
                    <div style={{ backgroundColor: "#11111004", gridColumn: "1 / span 3", marginRight: "-2.5rem", borderRight: "1px solid #11111010" }}></div>

                </div>

            </div>
        </div>
    )
}

export default Projects