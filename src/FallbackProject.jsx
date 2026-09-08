import './FallbackProject.css'
import PatternBg from './PatternBg'
import { Link, useNavigate } from 'react-router-dom'
import { INTRO_PLAYED_KEY } from './introFlag'

const FallbackProject = () => {

    const navigate = useNavigate()

    const goHome = (e) => {
        e.preventDefault()
        sessionStorage.removeItem(INTRO_PLAYED_KEY)
        navigate('/')
    }

    return (
        <>
            <PatternBg />
            <div className='container_fallback_project'>
                <Link to='/' className='name_logo_container' onClick={goHome}><p>tm.</p></Link>
                <div className='fallback_project'>
                    <h1>project details coming soon...</h1>
                </div>
            </div>
        </>
    )
}

export default FallbackProject