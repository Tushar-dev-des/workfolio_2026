import React from 'react'
import linkedIn from './assets/linkedin.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='footer'>
                <div className='outro'>
                    <h1>Like the vibe? Lets connect. </h1>
                    <p>Always open to work that makes a difference!</p>
                </div>
                <div className="socials">
                    <a rel="noopener noreferrer">tusharxmahajan@gmail.com</a>
                    <img onClick={() => window.open("https://www.linkedin.com/in/tusharxmahajan/", "_blank")} src={linkedIn} alt="" style={{ cursor: "pointer" }} />
                </div>
            </div>

        </div>
    )
}

export default Footer