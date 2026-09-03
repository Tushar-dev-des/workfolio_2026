import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './ProjectPage.css'
import Footer from './Footer'
import PatternBg from './PatternBg'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, useGSAP);

const ProjectPage = () => {

    const { id } = useParams()

    useGSAP(() => {

        const childSplit = new SplitText(".project_intro p", { type: "lines" });

        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.
            from(".pattern_bg, .name_logo_container p", {
                yPercent: -100,
                duration: 2,
                ease: "power4.inOut",
                delay: 1,
                opacity: 0.4,
            })
            .from(".project_intro h1", {
                yPercent: 80,
                duration: 1.5,
                opacity: 0,
            }, "-=1")
            .from(childSplit.lines, {
                yPercent: 100,
                duration: 1.5,
                stagger: 0.1,
                opacity: 0,
                delay: 1,
            }, "-=1")
            .from(".container_project_thumbnail", {
                yPercent: 20,
                duration: 1.5,
                opacity: 0,
            }, "-=1.25");
    })

    return (
        <>
            <PatternBg />
            <div className="container_project">
                <div className="blocks">
                    <Link to='/' className='name_logo_container'><p>tm.</p></Link>
                    <div className="container_project_intro">
                        <div className='project_intro'>
                            <h1>Re-imagining business travel</h1>
                            <p>This project was our thoughtful attempt towards this challenge and the bigger goal was to design an intuitive, frictionless seamless business travel experience, <br /> that allowed users to effortlessly compile and modify their travel options—including flights, hotels, buses, trains, and cabs—into a cohesive itinerary.</p>
                        </div>
                    </div>
                    <div className="container_project_thumbnail">
                        <div className="project_thumbnail"></div>
                    </div>
                    <div className="container_tldr">
                        <div className="tldr">
                            <p>tl;dr</p>
                            <div className="container_metrics">
                                <div className="metrics_row">
                                    <div className="metric_card">
                                        <h1>3<span style={{ fontWeight: '300' }}>x</span></h1>
                                        <p>number of approved trips</p>
                                    </div>
                                    <div className="metric_card">
                                        <h1>2.5<span style={{ fontWeight: '300' }}>x</span></h1>
                                        <p>total flight bookings</p>
                                    </div>
                                    <div className="metric_card">
                                        <h1>~₹50 lacs</h1>
                                        <p>increase in cashflow</p>
                                    </div>
                                </div>
                                <div className="metrics_row">
                                    <div className="metric_card">
                                        <h1>improved usability</h1>
                                        <p>users finally felt in control</p>
                                    </div>
                                    <div className="metric_card">
                                        <div className="cd">
                                            <h1>churn <span style={{ fontSize: '2.75rem' }}>🚫</span></h1>
                                            <h1>growth <span style={{ fontSize: '2.75rem' }}>✅</span></h1>
                                        </div>
                                        <p>users finally felt in control</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container_project_slideshow">
                        <div className="project_slideshow"></div>
                    </div>
                    <div className="container_my_role">
                        <div className="my_role">
                            <p style={{ fontWeight: "600", color: "#344054" }}>My role</p>
                            <p>I owned end-to-end experience design on this project — from ideation through execution, down to notifications and edge cases — along with direct input into product strategy. </p>
                            <p>A key part of this was qualitative research. Beyond our existing users, I partnered with sales to speak with competitors' users too, which surfaced pain points and mental models we wouldn't have found otherwise.</p>
                            <p>I also worked closely with cross-functional teams and stakeholders, both directly and indirectly tied to the project, to keep decisions aligned and execution on track.</p>
                        </div>
                    </div>
                    <div className="container_apologies">
                        <div className="apologies">
                            <p style={{ fontWeight: "600", color: "#344054" }}>Apologies</p>
                            <p>Due to high confidentiality, i wont be able to share the whole thing here. <br />
                                Please reach out if your work & ideas, relate to mine.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProjectPage