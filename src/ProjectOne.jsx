import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import './ProjectOne.css'
import PatternBg from './PatternBg'
import ProjectSlideshow from './Components/ProjectSlideshow'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { INTRO_PLAYED_KEY } from './introFlag'
import travelRedesign1 from './assets/travel_redesign_1.webp';
import travelRedesign2 from './assets/travel_redesign_2.webp';
import travelRedesign3 from './assets/travel_redesign_3.webp';
import travelRedesign4 from './assets/travel_redesign_4.webp';
import travelRedesign5 from './assets/travel_redesign_5.webp';
import travelRedesign6 from './assets/travel_redesign_6.webp';

import { useLenis } from "lenis/react";

gsap.registerPlugin(SplitText, useGSAP);

const DEFAULT_SLIDES = [
    {
        id: 1,
        url: travelRedesign1,
        title: 'Smart Business Travel Itinerary',
        caption: 'Unified compilation combining flights, hotels, trains, and cabs into a seamless itinerary.',
        tag: 'Screen 01 · Itinerary Flow'
    },
    {
        id: 2,
        url: travelRedesign2,
        title: 'Enterprise Policy & Approval System',
        caption: 'Frictionless rule-based approvals that increased trip confirmations by 3x.',
        tag: 'Screen 02 · Corporate Policies'
    },
    {
        id: 3,
        url: travelRedesign5,
        title: 'Collaborative Multi-traveler Workspace',
        caption: 'Shared travel planning and coordination for distributed teams and executives.',
        tag: 'Screen 03 · Team Travel'
    },
    {
        id: 4,
        url: travelRedesign4,
        title: 'Real-time Modifications & Cashflow Dashboard',
        caption: 'Instant rescheduling, proactive flight alerts, and ~₹50 lacs unlocked in positive cashflow.',
        tag: 'Screen 04 · Insights & Management'
    },
    {
        id: 5,
        url: travelRedesign3,
        title: 'Real-time Modifications & Cashflow Dashboard',
        caption: 'Instant rescheduling, proactive flight alerts, and ~₹50 lacs unlocked in positive cashflow.',
        tag: 'Screen 04 · Insights & Management'
    },
    {
        id: 6,
        url: travelRedesign6,
        title: 'Real-time Modifications & Cashflow Dashboard',
        caption: 'Instant rescheduling, proactive flight alerts, and ~₹50 lacs unlocked in positive cashflow.',
        tag: 'Screen 04 · Insights & Management'
    },
];

const ProjectOne = () => {


    const lenis = useLenis();

    useEffect(() => {
        lenis?.scrollTo(0, { immediate: true });
    }, [lenis]);

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
                yPercent: 25,
                duration: 2,
                opacity: 0,
            }, "-=1.25");
    })

    return (
        <>
            <PatternBg />
            <div className="container_project">
                <div className="marquee-item"></div>
                <div className="marquee-item-shadow"></div>
                <div className="blocks">
                    <Link to='/' className='name_logo_container' onClick={goHome}><p>tm.</p></Link>
                    <div className="container_project_intro">
                        <div className='project_intro'>
                            <h1>Re-imagining business travel</h1>
                            <p>This project was our thoughtful attempt to address the largely unsolved problem space of business travel experience with a larger goal of creating a more flexible, intuitive, and seamless experience for business travellers, that allowed them <br />to effortlessly compile and intuitively visualise their cohesive itinerary, as well as navigate seamlessly through the approval & booking flows.</p>
                        </div>
                    </div>
                    <div className="container_project_thumbnail">
                        <ProjectSlideshow slides={DEFAULT_SLIDES} />
                    </div>
                    <div className="container_tldr">
                        <div className="tldr">
                            <p>tl;dr (45d post implementation)</p>
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
                                        <div>
                                            <h1>churn <span style={{
                                                fontSize: '2.75rem',
                                                lineHeight: "1",
                                            }}>🚫</span></h1>
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                                <h1 style={{
                                                    background: "linear-gradient(86deg, #BF9A66 0%, #ECC890 60%)",
                                                    WebkitBackgroundClip: "text",
                                                    backgroundClip: "text",
                                                    color: "transparent",
                                                }}>growth</h1>
                                                <span style={{
                                                    fontSize: '2.75rem', background: "fff",
                                                    lineHeight: "1",
                                                }}>✅</span>
                                            </div>
                                        </div>
                                        <p>grabbed attention of big names</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="container_project_slideshow">
                        <ProjectSlideshow />
                    </div> */}
                    <div className="container_my_role">
                        <div className="my_role">
                            <p style={{ fontWeight: "600", color: "#344054" }}>My role</p>
                            <p>I owned end-to-end experience design: right from the ideation through execution, from email notifications to edge cases; <br /> along with shaping and defining product strategy. </p>
                            <p>Qualitative user & product research. Beyond our existing users, I partnered with sales to speak with competitors' users too, who surfaced pain points and mental models we wouldn't have found otherwise.</p>
                            <p>Worked closely with cross-functional teams and stakeholders, both directly and indirectly tied to the project, to keep decisions aligned and execution on track.</p>
                        </div>
                    </div>

                    <div className="container_confidentiality">
                        <div className="confidentiality">
                            <p style={{ fontWeight: "600", color: "#344054" }}>Curious to know more?</p>
                            <p>This project is confidential. <br />
                                Please reach out; if your work & ideas relate to mine.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectOne