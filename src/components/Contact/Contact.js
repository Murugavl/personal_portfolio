import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Container, Row } from 'react-bootstrap';
import Particle from '../Particle';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_d0luuwa', 'template_ovy8zcr', form.current, {
                publicKey: '0BgdzHV-jQklW714m',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Message Sent Successfully");
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Sorry, an error occurred. Please try again.")
                },
            );
    };


    return (
        <Container style={{ marginTop: "8%", marginBottom: "5%" }}>
            <Particle />

            <Container>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <h1 style={{ color: "var(--text-main)" }} className='mb-3'>Get in Touch</h1>
                    <p style={{ color: "white", marginBottom: "30px" }}>Alternatively, you can reach me at: <a href="mailto:vmv2k05@gmail.com" className="purple">vmv2k05@gmail.com</a></p>
                    <form ref={form} onSubmit={sendEmail} className="st-contact-form w-50" id="contact-form">
                        <div className="input-group">
                            <input className='form-control mb-2 contact-input' type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="input-group">
                            <input className='form-control mb-2 contact-input' type="text" id="email" name="clientemail" placeholder="Your Email" required />
                        </div>
                        <div className="input-group">
                            <input className='form-control mb-2 contact-input' type="text" id="subject" name="subject" placeholder="Your Subject" required />
                        </div>
                        <div className="input-group">
                            <textarea className='form-control mb-2 contact-input' cols="30" rows="10" id="msg" name="message" placeholder="Your Message" required style={{ resize: "none" }}></textarea>
                        </div>
                        <button className='btn btn-primary' type="submit" id="submit" name="submit">Send Message</button>
                    </form>
                </Row>
            </Container>
        </Container>
    )
}

export default Contact
