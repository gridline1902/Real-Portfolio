import React from 'react'
import "./footer.css"

import { FaFacebookF } from "react-icons/fa"
import  {FiInstagram, FiTwitter } from "react-icons/fi"
import { CiLinkedin } from "react-icons/ci"



const footer = () => {
  return (
    <footer id="footer">
    <a href="#" className="footer__logo">GRIDLINE</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    
    <div className="footer__socials">
      <a href="https://www.facebook.com/profile.php?id=100008696238606" target="_blank"><FaFacebookF /></a>
      <a href="https://www.instagram.com/free_guy00" target="_blank"><FiInstagram /></a>
      <a href="https://twitter.com/gridline1902" target="_blank"><FiTwitter /></a>
    </div>
    
    <div className="footer__copyright">
      <small>&copy; Michael Freeman. All rights reserved.</small>
    </div>


    </footer>
  )
}

export default footer