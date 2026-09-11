import React from 'react'
import linkedIn from './assets/linkedin.svg'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all"
import './Footer.css'

import parallaxImage1 from './assets/parallax_1.png'
import parallaxImage2 from './assets/parallax_2.png'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Footer = () => {

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
        <div className='footer_container'>
            <div className='footer'>
                <div className='outro'>
                    <h1>Always open to: work that makes a difference! </h1>
                    <p>© 2026 Tushar Mahajan.</p>
                </div>
                <div className="copyright">
                    © 2026 Tushar Mahajan.
                </div>
                <div className="socials">
                    <a rel="noopener noreferrer">tusharxmahajan@gmail.com</a>
                    <img onClick={() => window.open("https://www.linkedin.com/in/tusharxmahajan/", "_blank")} src={linkedIn} alt="" style={{ cursor: "pointer", height: "1.125rem", width: "1.125rem" }} />
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