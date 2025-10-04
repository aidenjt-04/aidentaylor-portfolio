import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Home.css';
import AidenTaylorHeadshot from '../AidenTaylorHeadshot.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-wrapper">
            <Navbar />
            <main className="home-main-content">
                <h1>AIDEN TAYLOR</h1>
                <div className="divider"></div>
                <h2>Software Engineer</h2>
            </main>
            <div class="arrow-container">
                <i className="bx bx-chevron-down arrow"></i>
            </div>
            <div className="about-me-container">
                <div className="about-me-text">
                    <h1>A little bit about me...</h1>
                    <p>Hi! I'm Aiden, a student at UC Irvine. I enjoy building web applications and exploring the diverse areas of software engineering, with a particular interest in computer networks and cybersecurity. My goal is to continue growing as an engineer and contribute to impactful, innovative projects.</p>
                    <Link to="/About"><button className="btn">Learn More About Me</button></Link>
                </div>
                <div className="about-me-portrait">
                    <img src={AidenTaylorHeadshot} alt="Photo of Aiden Taylor" className='photo' />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;