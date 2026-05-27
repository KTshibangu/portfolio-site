import React from 'react';
import { useRef } from 'react';
import './Contact.css';
import PythonCert from '../../assets/python-cert.png';
import PowerBICert from '../../assets/powerbi-cert.png';
import JavascriptCert from '../../assets/javascript-cert.png';
import ReactCert from '../../assets/react-cert.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();  

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3io81qh', 'template_k4ii6ye', form.current, {
        publicKey: 'WRfw98izV2AiZUcd_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contactPage'>
        <div id="clients">
            <h1 className="contactPageTitle">My Certifications</h1>
            <p className="clientDesc">
                My certifications reflect my expertise across two key areas of technology: 
                software engineering and data analytics. They demonstrate my commitment to continuously 
                improving my skills and staying up to date with modern technologies in both fields.
            </p>
            <div className="clientImgs">
                <img src={PythonCert} alt="client" className="clientImg" />
                <img src={PowerBICert} alt="client" className="clientImg" />
                <img src={JavascriptCert} alt="client" className="clientImg" />
                <img src={ReactCert} alt="client" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">
                Please fill out the form below to discuss any work opportunities.
            </span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                <textarea name="message" className='msg' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="link" className="link" />
                    <img src={TwitterIcon} alt="link" className="link" />
                    <img src={YoutubeIcon} alt="link" className="link" />
                    <img src={InstagramIcon} alt="link" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
