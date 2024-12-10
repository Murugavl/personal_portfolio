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
                    toast.success("Message Send Successfully");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Sorry Error Occured Try again....")
                },
            );
    };


    return (
        <Container style={{marginTop: "8%", marginBottom: "5%"}}>
            <Particle />

            <Container>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <h1 style={{color:"white"}} className='mb-3'>Just Say Hello</h1>
                    <form ref={form} onSubmit={sendEmail} className="st-contact-form w-50" id="contact-form">
                        <div className="input-group">
                            <input style={{backgroundColor:"inherit", color:"white", borderRadius:"10px", border:"2px solid #53427a"}} className='form-control mb-2' type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="input-group">
                            <input style={{backgroundColor:"inherit", color:"white", borderRadius:"10px", border:"2px solid #53427a"}} className='form-control mb-2' type="text" id="email" name="clientemail" placeholder="Your Email" required />
                        </div>
                        <div className="input-group">
                            <input style={{backgroundColor:"inherit", color:"white", borderRadius:"10px", border:"2px solid #53427a"}} className='form-control mb-2' type="text" id="subject" name="subject" placeholder="Your Subject" required />
                        </div>
                        <div className="input-group">
                            <textarea style={{backgroundColor:"inherit", color:"white", borderRadius:"10px", resize:"none", border:"2px solid #53427a"}} className='form-control mb-2' cols="30" rows="10" id="msg" name="message" placeholder="Your Message" required></textarea>
                        </div>
                        <button className='btn btn-primary' type="submit" id="submit" name="submit">Send Message</button>
                    </form>
                </Row>
            </Container>
        </Container>
    )
}

export default Contact
