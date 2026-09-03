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
                            <h3>Re-imagining corporate business travel</h3>
                            <p>how redesigning business travel experience increased flight bookings by 2.5x, ~₹50,00,000 in cashflow, & grabbed attention of big enterprises</p>
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
                            <h3>Re-imagining corporate business travel</h3>
                            <p>how redesigning business travel experience increased flight bookings by 2.5x, ~₹50,00,000 in cashflow, & grabbed attention of big enterprises</p>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Projects