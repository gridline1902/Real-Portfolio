import React from 'react'
import "./nav.css"
import { AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import { BiBookAlt, BiMessageSquareDetail  } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { useState, useEffect } from "react"




const nav = () => {
  const [activeNav, setActiveNav] = useState("#")

  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        "#": 0,
        "#about": document.querySelector("#about").offsetTop,
        "#experience": document.querySelector("#experience").offsetTop,
        "#services": document.querySelector("#services").offsetTop,
        "#contact": document.querySelector("#contact").offsetTop
      }

      Object.entries(sections).forEach(([key, value]) => {
        if (window.scrollY + 70 >= value) {
          setActiveNav(key)
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav>
      <a href="#" className={activeNav === "#" ? "active" : ""} onClick={() => setActiveNav("#")}> <AiOutlineHome /> </a>
      <a href="#about" className={activeNav === "#about" ? "active" : ""} onClick={() => setActiveNav("#about")}> <AiOutlineUser /> </a>
      <a href="#experience" className={activeNav === "#experience" ? "active" : ""} onClick={() => setActiveNav("#experience")}> <BiBookAlt /> </a>
      <a href="#services" className={activeNav === "#services" ? "active" : ""} onClick={() => setActiveNav("#services")}> <RiServiceLine /> </a>
      <a href="#contact" className={activeNav === "#contact" ? "active" : ""} onClick={() => setActiveNav("#contact")}> <BiMessageSquareDetail /> </a>
    </nav>
  )
}

export default nav