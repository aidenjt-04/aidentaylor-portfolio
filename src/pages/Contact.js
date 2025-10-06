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
                <section className="contact-info">
                    <h1 className="page-title">Want to get in touch with me?</h1>
                    <h2 className="info">Please fill out this form and I will get back to you as soon as possible.</h2>
                </section>
                <section className="user-inputs">
                    <form action="https://getform.io/f/akkpxzga" method="POST">
                        <label>Name:<input type="text" name="name" placeholder="Your name" required /></label>
                        <label>Email:<input type="email" name="email" placeholder="your.email@example.com" required /></label>
                        <label>Message:<textarea name="message" placeholder="Your message here..." rows={5} required /></label>
                        <input  className="spam" type="hidden" name="_gotcha"></input>
                        <button type="submit" className="submit-button">Send</button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>  
    );
}

export default Contact;