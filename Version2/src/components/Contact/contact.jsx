import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

import { MdOutlineEmail } from "react-icons/md"
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai"



const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2ri17bg',
      'template_nblqi8p',
      form.current,
      'uosacCRiNrP1jyiQsSrPb'
      )
      .then (
        () => {
          alert('Message sent!')

        },
        () => {
          alert('Fail to send the message, please try again')
        }
      )

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        <div className="contact__options">

          <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>michaeljrfreeman@gmail.com</h5>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=email@michaeljrfreeman@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
          <AiOutlineInstagram className="contact__option-icon"/>
            <h4>Instagram</h4>
            <h5>freeguy00</h5>
            <a href="https://ig.me/m/freeguy00" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
          <AiOutlineWhatsApp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <a href="https://wa.me/23276804672" target="_blank">Send a message</a>
          </article>

        </div>

        {/* End Of Contact Options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" name="message" rows="7" required></textarea>
          <button className="btn btn-primary" type="submit">Send Message</button>
        </form> 

      </div>

    </section>
  )
}

export default contact