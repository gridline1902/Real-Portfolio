import React from 'react'
import "./about.css"
import ME from "../../assets/images/My-Project-3.png"
import { FiAward, FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"



const About = () => {
  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="about-me" className="about__image" />
            </div>
          </div>

          <div className="about__content">

            <div className="about__cards">
              <article className="about__card">
                <FiAward className="about__card-icon"/>
                <h5>Experience</h5>
                <small>2 years Experience</small>
              </article>

              <article className="about__card">
                <FiUsers className="about__card-icon"/>
                <h5>Clients</h5>
                <small>
                  Currently accepting new clients.
                </small>
              </article>
 
              <article className="about__card">
                <VscFolderLibrary className="about__card-icon"/>
                <h5>Projects</h5>
                <small>10+ Completed Projects</small>
              </article>
            </div>

              <p>
                Hi, I'm Michael Freeman, a web developer with 1 year of experience in creating stylish and functional websites.<br/>
                My core skills include HTML, CSS3, Python and I am currently working on expanding my knowledge of JavaScript.<br /><br />
                In my previous projects, I have honed my skills in crafting clean and user-friendly designs, and I take pride in ensuring my websites are responsive and easy to navigate.<br /><br />
                I believe in keeping things straightforward and intuitive, and I am always striving to stay up-to-date with the latest trends and technologies in web development.<br /><br />
                My portfolio showcases my work on a variety of projects, including personal blogs, small business websites, and online portfolios.
              </p>
            

            <a href="#contact" className="btn btn-primary">Let's Talk</a>

          </div>
        </div>
    </section>
  )
}

export default About