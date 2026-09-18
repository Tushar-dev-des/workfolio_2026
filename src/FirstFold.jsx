import React from 'react'
import dice_logo from './assets/logo_dice.svg'
import zaggle_logo from './assets/zaggle_logo.svg'
import './FirstFold.css'
import { Link } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"

import diceLogo from './assets/dice_logo.svg'
import zaggleLogo from "./assets/zaggle.svg"
import idfcLogo from "./assets/idfc_logo.svg"
import cleartripLogo from "./assets/cleartrip_logo.svg"
import mmtLogo from "./assets/mmt_logo.svg"
import pinelabsLogo from "./assets/pinelabs_logo.svg"
import upstoxLogo from "./assets/upstox_logo.svg"
import yesbankLogo from "./assets/yesbank_logo.svg"

gsap.registerPlugin(ScrollTrigger, useGSAP);


function FirstFold() {

    useGSAP(() => {
        gsap.from('.title_div, .runner_div_container', {
            scrollTrigger: {
                trigger: ".projects_title_container",
                start: "top 90%",
                end: "top 45%",
                scrub: true,
            },
            opacity: 0,
            filter: "blur(4px)",
            y: 60,
        })
    }, [])

    return (
        <>
            <div className="first_fold">
                <div className="content">
                    <Link to='/' className='name_logo_container'><p>tm.</p></Link>
                    <div className='hero_container'>
                        <div className='title_container'>
                            <div className="first_line">
                                <h1>
                                    <span className='gradient_title'>Product Designer</span>
                                </h1>
                                <div className="title">
                                    <h1>
                                        with over 3+ YoE
                                    </h1>
                                </div>
                            </div>

                            <div className="title">
                                <h1>thrives in 0→1, B2B/Enterprise/SaaS environments</h1>
                            </div>
                        </div>
                        <div className="subtitle_container">
                            <div>Currently at<a href="https://dice.tech/" target='blank' ><div className='dice_pill'><img src={dice_logo} alt="logo_dice" />Dice</div></a>now a part of<a href="https://www.zaggle.in/" target='blank' ><div className='dice_pill' style={{ color: '#ED3B41' }}><img src={zaggle_logo} alt="logo_dice" />Zaggle</div></a> </div>
                            <div>solving complex problems of the enterprise spends, finances, and operations space</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='projects_title_container'>
                <div className='title_div'>
                    <div style={{ padding: "0 1.5rem", gridColumn: "1/span 3" }}><h1>Selected work<span style={{ fontWeight: "300" }}> 2023-26</span></h1></div>
                    <div className='logo_row_wrapper'>
                        <div className="blur_left"></div>
                        <div className="blur_right"></div>
                        <div className='logo_row'>
                            <img src={diceLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                            <img src={zaggleLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                            <img src={idfcLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                            <img src={cleartripLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                            <img src={pinelabsLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                            <img src={upstoxLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                            <img src={yesbankLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                            <img src={mmtLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                        </div>
                        {/* duplicate set required for the seamless infinite loop */}
                        <div className='logo_row' aria-hidden="true">
                            <img src={diceLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                            <img src={zaggleLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                            <img src={idfcLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                            <img src={cleartripLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                            <img src={pinelabsLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                            <img src={upstoxLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                            <img src={yesbankLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                            <img src={mmtLogo} alt="" style={{ height: "2.25rem", width: "auto", objectFit: "contain" }} />
                        </div>
                    </div>
                </div>
                <div className='runner_div_container'>
                    <div className="runner_div"></div>
                </div>

            </div>
        </>
    )
}

export default FirstFold
