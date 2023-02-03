import React from 'react'
import "./services.css"
import { BiCheck } from "react-icons/bi"


const service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
      
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User research and testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Usability improvement suggestions</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website design and development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce website development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Management System (CMS) integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive web design and cross-browser compatibility</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website maintenance and updates</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Copywriting for websites and marketing materials</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog writing and management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Social media content creation and management</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation*/}
        
      </div>
    </section>
  )
}

export default service