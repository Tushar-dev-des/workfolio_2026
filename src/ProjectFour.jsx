import React, { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import './ProjectFour.css'
import PatternBg from './PatternBg'
import ProjectSlideshow from './Components/ProjectSlideshow'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import { INTRO_PLAYED_KEY } from './introFlag'
import upstox1 from './assets/upstox_1.webp';
import upstox2 from './assets/upstox_2.webp';
import upstox3 from './assets/upstox_3.webp';
import upstox4 from './assets/upstox_4.webp';
import gold from './assets/gold.svg'
import callout from './assets/callout.svg'
import order_form from './assets/order_form.svg'

import { useLenis } from "lenis/react";

gsap.registerPlugin(SplitText, useGSAP);

const UPSTOX_SLIDES = [
    {
        id: 1,
        url: upstox1,
        title: 'Upstox',
    },
    {
        id: 2,
        url: upstox2,
        title: 'Upstox',
    },
    {
        id: 3,
        url: upstox3,
        title: 'Upstox',
    },
    {
        id: 4,
        url: upstox4,
        title: 'Upstox',
    },
];

const ProjectFour = () => {

    const lenis = useLenis();

    useEffect(() => {
        lenis?.scrollTo(0, { immediate: true });
        ScrollTrigger.refresh();
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
                            <h1 style={{ color: "#7328BD" }}>Upstox</h1>
                            <p>It was a 6 month stint, where I worked on multiple high impact, complex trading & investment problems, starting from zero knowledge about it.
                            </p>
                        </div>
                    </div>
                    <div className="container_project_thumbnail">
                        <ProjectSlideshow slides={UPSTOX_SLIDES} />
                    </div>
                    <div className="container_tldr">
                        <div className="tldr" style={{ marginRight: "0.75rem" }}>
                            <p>projects I worked on</p>
                            <div className="container_metrics">
                                <div className="metrics_row">
                                    <div className="metric_card" style={{ gridColumn: "1 / span 12", position: "relative", overflow: "hidden", background: "#FFE5B280", padding: "1.75rem", borderRadius: "0.75rem", border: "1px solid #F5AF5340" }}>
                                        <img src={gold} alt="" style={{ width: "160px", height: "160px", objectFit: "cover" }} />
                                        <h1 style={{ color: "#fff", position: "absolute", top: "0", right: "-20px", fontSize: "200px", fontWeight: "900", opacity: "0.5" }}>1</h1>
                                        <p style={{ color: "#344054" }}>I designed Upstox’s Gold investment product experience for mobile, along with a senior designer, from scratch. <br /> We designed the mvp for trust, confidence, and a better discovery of Sovereign Gold Bonds. The business goal was to grow & capture a new segment of users.</p>
                                    </div>
                                </div>
                                <div className="metrics_row" style={{ gap: "1.5rem" }}>
                                    <div className="metric_card" style={{ gridColumn: "1 / span 7", position: "relative", overflow: "hidden", background: "#FFDBD180", padding: "1.75rem", borderRadius: "0.75rem", border: "1px solid #FD8E6E40" }}>
                                        <img src={order_form} alt="" style={{ width: "160px", height: "160px", objectFit: "cover" }} />
                                        <h1 style={{ color: "#fff", position: "absolute", top: "0", right: "-20px", fontSize: "200px", fontWeight: "900", opacity: "0.5" }}>2</h1>
                                        <p style={{ color: "#344054" }}>Second, I worked on designing a better order form for stocks trading, after a rise in drop-off rates that came after the revamped product was released.</p>
                                    </div>
                                    <div className="metric_card" style={{ gridColumn: "8 / span 5", position: "relative", overflow: "hidden", background: "#D4F2F280", padding: "1.75rem", borderRadius: "0.75rem", border: "1px solid #2E979640" }}>
                                        <img src={callout} alt="" style={{ width: "160px", height: "160px", objectFit: "cover" }} />
                                        <h1 style={{ color: "#fff", position: "absolute", top: "0", right: "-20px", fontSize: "200px", fontWeight: "900", opacity: "0.5" }}>3</h1>
                                        <p style={{ color: "#344054" }}>Next I worked on designing better callouts for corporate actions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container_my_role">
                        <div className="my_role">
                            <p style={{ fontWeight: "600", color: "#344054" }}>My role</p>
                            <p>Become a subject matter expert first. Before designing for a domain, it’s essential to understand its ecosystem and nuances, to build empathy grounded in the reality of its users.</p>
                            <p>0-1 product design, studying insights derived from user research and combining it with business requirements to deliver best possible experience.</p>
                            <p>Worked closely with product and marketing team.</p>
                        </div>
                    </div>
                    <div className="container_confidentiality">
                        <div className="confidentiality">
                            <p style={{ fontWeight: "600", color: "#344054" }}>Curious to know more?</p>
                            <p>This work is confidential. <br />
                                Please reach out; if your work & ideas relate to mine.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectFour