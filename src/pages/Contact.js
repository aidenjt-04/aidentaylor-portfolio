import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Contact.css';
import { useEffect } from 'react';

function Contact() {

    useEffect(() => {
        const form = document.querySelector('form');
        if (form) form.reset();
    }, []);
  
    return (
        <div className="contact-wrapper">
            <Navbar />
            <main className="contact-main-content">
                <div className="contact-info">
                    <h1 className="page-title">Want to get in touch with me?</h1>
                    <h1 className="info">Please fill out this form and I will get back to you as soon as possible.</h1>
                </div>
                <div className="user-inputs">
                    <form action="https://getform.io/f/akkpxzga" method="POST">
                        <p>Name:<input type="text" name="name" placeholder="Your name" required /></p>
                        <p>Email:<input type="email" name="email" placeholder="your.email@example.com" required /></p>
                        <p>Message:<textarea name="message" placeholder="Your message here..." rows={5} required /></p>
                        <input  className="spam" type="hidden" name="_gotcha"></input>
                        <button type="submit" className="submit-button">Send</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>  
    );
}

export default Contact;