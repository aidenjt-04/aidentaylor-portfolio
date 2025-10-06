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
                <hr className="divider" / >
                <h2>Software Engineer</h2>
            </main>
            <div className="arrow-container" aria-hidden="true">
                <i className="bx bx-chevron-down arrow"></i>
            </div>
            <section className="about-me-container">
                <div className="about-me-text">
                    <h2>A little bit about me...</h2>
                    <p>Hi! I'm Aiden, a student at UC Irvine. I enjoy building web applications and exploring the diverse areas of software engineering, with a particular interest in computer networks and cybersecurity. My goal is to continue growing as an engineer and contribute to impactful, innovative projects.</p>
                    <Link to="/About"><button className="btn">Learn More About Me</button></Link>
                </div>
                <figure className="about-me-portrait">
                    <img src={AidenTaylorHeadshot} alt="Photo of Aiden Taylor" className='photo' />
                </figure>
            </section>
            <Footer />
        </div>
    );
}

export default Home;