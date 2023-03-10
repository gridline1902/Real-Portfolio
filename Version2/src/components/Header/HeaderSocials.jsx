import React from 'react'
import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/michael-freeman1902" target="_blank"> <BsLinkedin /> </a>
        <a href="https://github.com/gridline1902" target="_blank"> <BsGithub /> </a>
        <a href="https://dribbble.com/gridline1902" target="_blank"> <BsDribbble /> </a>
    </div>
  )
}

export default HeaderSocials