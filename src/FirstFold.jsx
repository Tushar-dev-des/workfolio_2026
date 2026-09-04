import React from 'react'
import dice_logo from './assets/logo_dice.svg'
import './FirstFold.css'
import { Link } from 'react-router-dom'


function FirstFold() {

    return (
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
                        <div>- Currently at <a href="https://dice.tech/" target='blank' ><div className='dice_pill'><img src={dice_logo} alt="logo_dice" />Dice</div></a></div>
                        <div>- solving complex problems of the enterprise spends, finances, and operations space</div>
                        <div>- ‘Jack of all trades, master of a few’</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstFold
