import React from 'react'
import linkedIn from './assets/linkedin.svg'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"
import './Footer.css'
import ISTClock from "./Components/ISTClock";

import parallaxImage1 from './assets/parallax_1.png'
import parallaxImage2 from './assets/parallax_2.png'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Footer = () => {

    useGSAP(() => {

        // ScrollTrigger.create({
        //     trigger: ".static_footer_container",
        //     start: "top top",
        //     end: "bottom top",
        //     pin: ".static_footer",
        //     pinSpacing: false,
        // });


        gsap.from(".static_footer", {
            yPercent: -100,
            ease: "none",
            scrollTrigger: {
                trigger: ".static_footer_container",
                start: "top 100%",
                end: "top 25%",
                scrub: true,
            },
        });

    }, []);

    // useGSAP(() => {
    //     ScrollTrigger.create({
    //         trigger: ".footer_wrapper",
    //         start: "top top",
    //         end: "bottom top",
    //         pin: ".bg-layer",
    //         pinSpacing: false,
    //     });

    //     gsap.to(".fg-layer", {

    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".reveal-wrapper",
    //             start: "top top",
    //             end: "bottom top",
    //             scrub: true,
    //         },
    //     })
    //     gsap.from('.parallaxImage1', {
    //         scrollTrigger: {
    //             trigger: ".footer_wrapper",
    //             start: "top 0%",
    //             end: "top -100%",
    //             scrub: true,
    //         },
    //         y: 400,
    //     });

    //     gsap.from('.parallaxImage2', {
    //         scrollTrigger: {
    //             trigger: ".footer_wrapper",
    //             start: "top 0%",
    //             end: "top -100%",
    //             scrub: true,
    //         },
    //         y: 200,
    //     });
    // }, []);


    return (
        // <div className='footer_container'>
        //     <div className='footer'>
        //         <div className='outro'>
        //             <h1>Always open to: work that makes a difference! </h1>
        //             <p>© 2026 Tushar Mahajan.</p>
        //         </div>
        //         <div className="copyright">
        //             © 2026 Tushar Mahajan.
        //         </div>
        //         <div className="socials">
        //             <a rel="noopener noreferrer">tusharxmahajan@gmail.com</a>
        //             <img onClick={() => window.open("https://www.linkedin.com/in/tusharxmahajan/", "_blank")} src={linkedIn} alt="" style={{ cursor: "pointer", height: "1.125rem", width: "1.125rem" }} />
        //         </div>
        //     </div>
        // </div>

        <div className="static_footer_container">
            <div className="static_footer">
                <div className='footer_content'>
                    <div className="footer_title">
                        {/* <p>like the vibe?</p> */}
                        <h1>Always open to <br /> work that makes a difference.</h1>
                    </div>
                    <div className="footer_contact">
                        {/* <p>tusharxmahajan@gmail.com</p> */}
                        <div className="footer_socials_container">
                            <div className='demo'>
                                <p>Drop me an email</p>
                                <p>tusharxmahajan@gmail.com</p>
                            </div>
                            <div className='demo'>
                                <p>Elsewhere</p>
                                <div className='social_links'>
                                    <p onClick={() => window.open("https://www.linkedin.com/in/tusharxmahajan/", "_blank")} style={{ cursor: "pointer" }}>LinkedIn</p>
                                    <p>Github</p>
                                    <p>Resume</p>
                                </div>
                            </div>
                            <div className="demo" style={{ gridColumn: "10/span 3", marginLeft: "-2.5rem" }}>
                                <p>Currently</p>
                                <p>Pune, {<ISTClock />}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        // <div className='footer_wrapper'>
        //     <div class="bg-layer">
        //         <div className="footer_content"></div>
        //         <div className="parallax_container">
        //             <div className='parallaxImage2'></div>
        //             <div className='parallaxImage1'></div>
        //         </div>
        //     </div>
        //     <div class="fg-layer"></div>
        // </div>
    )
}

export default Footer