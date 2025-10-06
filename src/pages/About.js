import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/About.css";
import Map from "../components/Map";
import CodeWindow from "../components/CodeWindow";
import FutureLoading from '../components/FutureLoading';


function About() {
    return (
        <div className="about-wrapper">
            <Navbar />
            <main className="about-main-content">
                <h1>So you want to learn more about me?</h1>
                <section className="about-container">
                    <div className="about-text">
                        <h2>The Beginning</h2>
                        <p>I grew up in Bakersfield, CA. I went to East Bakersfield High School. In high school, I was on the cross country team, the track team, and I was also the ASB president. These things were fun, but I think the most important part of high school was my first computer science course. This is where I found my passion for software and I knew what I wanted to go to college for... to be a Software Engineer!</p>
                    </div>
                    <figure className="about-visual-content hide">
                        <Map />
                    </figure>
                </section>
                <section className="about-container">
                    <div className="about-text">
                        <h2>The Present</h2>
                        <p>I ended up at UC Irvine as a Computer Science Major. However, this was short lived as I decied to change my major. I felt that Computer Science was more on the theoretical side, whereas Software Engineering was more on the hands-on end of the spectrum. So... I changed my major to Software Engineering, and now I will be graduating in March 2026 with a BS in Software Engineering! At UCI, I have gained so many valuable skills, and you can see some of them to the side!</p>
                    </div>
                    <figure className="about-visual-content hide">
                        <CodeWindow />
                    </figure>
                </section>
                <section className="about-container">
                    <div className="about-text">
                        <h2>The Future</h2>
                        <p>Now that I am close to graduation, I am left to figure out what next? Well... I have some options. I am currently looking for full-time work after graduation! Some positions I am looking for are Software Engineer, Full Stack Web Developer, and Front-End Engineer. Other than full-time work, I am looking into some Master's programs. Throughout my coursework at UCI, I have developed a passion and curiousity for computer networks and cybersecurity. I would love to obtain a MS in one of these fields to eventually begin work in the field.</p>
                    </div>
                    <figure className="about-visual-content hide">
                        <FutureLoading />
                    </figure>
                </section>
            </main>
            <Footer />
        </div>  
    );
}

export default About;