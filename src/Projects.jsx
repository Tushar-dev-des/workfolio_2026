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
                            <h3>DICE Travel: Business travel experience, but a seamless one.</h3>
                            <p>Legacy systems offer rigid workflows, clunky interfaces and an overall fragmented ux. <br /> We designed one, that the business travellers actually needed.</p>
                        </div>
                    </Link>
                </div>
                <div className="project p2">
                    <Link to="/projects/2" className="project_content">
                        <div className="thumbnail">
                        </div>
                        <div className="desc">
                            <h3>Designing <span className='atlas_ai'>Atlas</span> : an AI beyond the usual copilots; for the enterprises</h3>
                            <p>Atlas is an AI experience across the Dice suite, for the complex world of enterprise spends and finances, <br /> that bridges the gap between information, insight, and action.</p>
                        </div>
                    </Link>
                </div>
                <div className="project p3">
                    <Link to="/projects/3" className="project_content">
                        <div className="thumbnail">
                        </div>
                        <div className="desc">
                            <h3>Cleartrip Assured: Better choices for corporate stays</h3>
                            <p>It was difficult for business travellers to find the best stays for their trips; <br /> Cleartrip assured is a curated collection of stays, handpicked & best-suited for them.</p>
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