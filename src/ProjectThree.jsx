import React, { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import './ProjectThree.css'
import PatternBg from './PatternBg'
import ProjectSlideshow from './Components/ProjectSlideshow'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { INTRO_PLAYED_KEY } from './introFlag'
import cleartripAssured1 from './assets/cleartrip_assured_1.webp';
import cleartripAssured2 from './assets/cleartrip_assured_2.webp';
import cleartripAssured3 from './assets/cleartrip_assured_3.webp';

gsap.registerPlugin(SplitText, useGSAP);

const CLEARTRIP_SLIDES = [
    {
        id: 1,
        url: cleartripAssured1,
        title: 'Cleartrip Assured',
        caption: 'A curated collection of pre-validated stays, handpicked & best-suited for business travellers.',
        tag: 'Screen 01 · Assured Stays'
    },
    {
        id: 2,
        url: cleartripAssured2,
        title: 'Cleartrip Assured',
        caption: 'A curated collection of pre-validated stays, handpicked & best-suited for business travellers.',
        tag: 'Screen 02 · Assured Stays'
    },
    {
        id: 3,
        url: cleartripAssured3,
        title: 'Cleartrip Assured',
        caption: 'A curated collection of pre-validated stays, handpicked & best-suited for business travellers.',
        tag: 'Screen 03 · Assured Stays'
    },
];

const ProjectOne = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const goHome = (e) => {
        e.preventDefault()
        sessionStorage.removeItem(INTRO_PLAYED_KEY)
        navigate('/')
    }

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
                    <Link to='/' className='name_logo_container' onClick={goHome}><p>tm.</p></Link>
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
                        <ProjectSlideshow slides={CLEARTRIP_SLIDES} />
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
                            <p>End-to-end experience design: established product ux framework for new releases in the future, across similar buckets and categories.</p>
                            <p>This was a partnership project, with already established product strategy and vision. <br /> My role was to work closely with the Cleartrip product team & AMs, along with the Dice engineering team to make it live.</p>
                        </div>
                    </div>
                    <div className="container_confidentiality">
                        <div className="confidentiality">
                            <p style={{ fontWeight: "600", color: "#344054" }}>Curious to know more?</p>
                            <p>Due to confidentiality, i wont be able to share the whole thing here. <br />
                                Please reach out; if your work & ideas relate to mine.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectOne