import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Experience.css';
import { LuArrowUpRight } from "react-icons/lu";


function Experience() {
    return (
        <div className="experience-wrapper">
            <Navbar />
            <main className="experience-main-content">
                <div className="experience-layout">
                    <div className="experience-left">
                        <h1>Work Experience</h1>
                        <div className="experience-row">
                            <div className="experience-card">
                                <header className="experience-date">May 2025 - Current</header>
                                <h2 className="experience-title">Full Stack Developer · BoundaryRSS</h2>
                                <p className="experience-bio">
                                    Designed and developed responsive, accessible user interfaces, collaborating in an agile team to deliver and integrate new product features across the full stack.
                                </p>
                                <ul className="experience-tags" aria-label="Technologies used">
                                    <li><span className="tag">React</span></li>
                                    <li><span className="tag">HTML/CSS</span></li>
                                    <li><span className="tag">JavaScript</span></li>
                                    <li><span className="tag">Figma</span></li>
                                    <li><span className="tag">Notion</span></li>
                                    <li><span className="tag">Slack</span></li>
                                </ul>
                            </div>
                            <div className="experience-card">
                                <header className="experience-date">September 2024 - Current</header>
                                <h2 className="experience-title">Instructor · Brains and Motion Education</h2>
                                <p className="experience-bio">
                                    Applied data-driven analysis and adaptive coaching to improve performance, while fostering collaboration, leadership, and strategic problem-solving within a team environment.
                                </p>
                                <ul className="experience-tags" aria-label="Technologies used">
                                    <li><span className="tag">Leadership</span></li>
                                    <li><span className="tag">Teamwork</span></li>
                                    <li><span className="tag">Coaching</span></li>
                                    <li><span className="tag">Strategic Planning</span></li>
                                    <li><span className="tag">Communications</span></li>
                                    <li><span className="tag">Problem-Solving</span></li>
                                </ul>
                            </div>
                        </div>
                        <h1>Projects</h1>
                        <div className="experience-row">
                            <div className="experience-card">
                                <header className="experience-date">October 2025</header>
                                <a
                                    href="https://github.com/aidenjt-04/aidentaylor-portfolio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Link to GitHub repo for portfolio project"
                                >
                                    <h2 className="experience-title">aidentaylor.com (v1)       <LuArrowUpRight /></h2>
                                </a>
                                <p className="experience-bio">
                                    Designed and built this portfolio to showcase my projects and skills, creating an interactive, responsive, and accessible experience that reflects my work as a full-stack developer.
                                </p>
                                <ul className="experience-tags" aria-label="Technologies used">
                                    <li><span className="tag">React</span></li>
                                    <li><span className="tag">HTML/CSS</span></li>
                                    <li><span className="tag">GitHub Pages</span></li>
                                    <li><span className="tag">Figma</span></li>
                                    <li><span className="tag">React Leaflet</span></li>
                                </ul>
                            </div>
                            <div className="experience-card">
                                <header className="experience-date">Spring 2025</header>
                                <a
                                    href="https://github.com/aidenjt-04/XPerience"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Link to GitHub repo for portfolio project"
                                >
                                    <h2 className="experience-title">Xperience       <LuArrowUpRight /></h2>
                                </a>
                                <p className="experience-bio">
                                    Led the development of XPerience, designing and building responsive, accessible user interfaces, integrating dynamic real-time features, and deploying scalable backend services to create a seamless social platform for gamers.
                                </p>
                                <ul className="experience-tags" aria-label="Technologies used">
                                    <li><span className="tag">React</span></li>
                                    <li><span className="tag">HTML/CSS</span></li>
                                    <li><span className="tag">JavaScript</span></li>
                                    <li><span className="tag">Node.js</span></li>
                                    <li><span className="tag">Express.js</span></li>
                                    <li><span className="tag">PostgreSQL</span></li>
                                    <li><span className="tag">AWS</span></li>
                                    <li><span className="tag">Figma</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="experience-right">
                        <div className="resume-container">
                            <h1 >Resume</h1>
                            <a
                                href="https://drive.google.com/file/d/1dLf1gFgdsqfYe7JLYV9ng4nhgSOgJ4wo/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <object
                                data="https://drive.google.com/file/d/1dLf1gFgdsqfYe7JLYV9ng4nhgSOgJ4wo/preview"
                                type="application/pdf"
                                className="resume-object"
                                >
                                <p>Your browser does not support PDFs. <br /> 
                                    <a href="https://drive.google.com/file/d/1dLf1gFgdsqfYe7JLYV9ng4nhgSOgJ4wo/view" target="_blank" rel="noreferrer">
                                    Click here to view the resume
                                    </a>
                                </p>
                                </object>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>  
    );
}

export default Experience;