import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './ProjectThree.css'
import PatternBg from './PatternBg'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, useGSAP);

const ProjectOne = () => {

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
                            <h1>Cleartrip Assured: Better choices for corporate stays</h1>
                            <p>Cleartrip had a huge overloaded hotel inventory, but built for the general audience. <br />
                                Business travellers had a different set of needs entirely, weren't looking for more options — they were looking for fewer, pre-validated ones. The mental model wasn't "help me compare," it was "tell me which of these I don't need to think about." <br />
                                Cleartrip assured was how we tackled this.
                            </p>
                        </div>
                    </div>
                    <div className="container_project_thumbnail">
                        <div className="project_thumbnail"></div>
                    </div>
                    <div className="container_tldr">
                        <div className="tldr">
                            <p>tl;dr (45d post release)</p>
                            <div className="container_metrics">
                                <div className="metrics_row">
                                    <div className="metric_card">
                                        <h1>89<span style={{ fontWeight: '300' }}>/100</span></h1>
                                        <p>bookings were CT assured</p>
                                    </div>
                                    <div className="metric_card">
                                        <h1>19<span style={{ fontWeight: '300' }}>%</span></h1>
                                        <p>increase in total stay bookings</p>
                                    </div>
                                    <div className="metric_card">
                                        <h1>~₹24 lacs</h1>
                                        <p>saved in previously missed GST claims</p>
                                    </div>

                                </div>
                                <div className="metrics_row">
                                    <div className="metric_card" style={{ gridColumn: "span 6" }}>
                                        <h1>17<span style={{ fontWeight: '300' }}>/20</span></h1>
                                        <p>reported better booking and travel experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container_my_role">
                        <div className="my_role">
                            <p style={{ fontWeight: "600", color: "#344054" }}>My role</p>
                            <p>End-to-end experience design — established product ux framework for similar feature releases in the future</p>
                            <p>Worked closely with cross-functional teams and stakeholders, both directly and indirectly tied to the project, to keep decisions aligned and execution on track.</p>
                        </div>
                    </div>
                    <div className="container_apologies">
                        <div className="apologies">
                            <p style={{ fontWeight: "600", color: "#344054" }}>Apologies</p>
                            <p>Due to confidentiality, i wont be able to share the whole thing here. <br />
                                Please reach out if your work & ideas, relate to mine.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectOne