import React from 'react'
import './FallbackProject.css'
import PatternBg from './PatternBg'
import { Link } from 'react-router-dom'

const FallbackProject = () => {
    return (
        <>
            <PatternBg />
            <div className='container_fallback_project'>
                <Link to='/' className='name_logo_container'><p>tm.</p></Link>
                <div className='fallback_project'>
                    <h1>project details coming soon...</h1>
                </div>
            </div>
        </>
    )
}

export default FallbackProject