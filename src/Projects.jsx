import './Projects.css'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div className='projects_container'>
            <div className="projects">
                <div className="project p1">
                    <Link to="/projects/1" className="project_content">
                        <div className="thumbnail">
                        </div>
                        <div className="desc">
                            <h3>Re-imagining corporate business travel</h3>
                            <p>how redesigning business travel experience increased flight bookings by 2.5x, ~₹50,00,000 in cashflow, & grabbed attention of big enterprises</p>
                        </div>
                    </Link>
                </div>
                <div className="project p2">
                    <Link to="/projects/2" className="project_content">
                        <div className="thumbnail">
                        </div>
                        <div className="desc">
                            <h3>Designing <span className='atlas_ai'>Atlas</span> : an AI beyond the usual copilots; for the enterprises</h3>
                            <p>Atlas is an AI experience across the Dice suite, for the complex world of enterprise spends and finances, <br /> that bridge the gap between information, insight, and action.</p>
                        </div>
                    </Link>
                </div>
                <div className="project p3">
                    <Link to="/projects/3" className="project_content">
                        <div className="thumbnail">
                        </div>
                        <div className="desc">
                            <h3>Re-imagining corporate business travel</h3>
                            <p>how redesigning business travel experience increased flight bookings by 2.5x, ~₹50,00,000 in cashflow, & grabbed attention of big enterprises</p>
                        </div>
                    </Link>
                </div>
                <div className="project p4">
                    <Link to="/projects/4" className="project_content">
                        <div className="thumbnail">
                        </div>
                        <div className="desc">
                            <h3>The Upstox files</h3>
                            <p>A collection of all of my work when I was at upstox</p>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Projects