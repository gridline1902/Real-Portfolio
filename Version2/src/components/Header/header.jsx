import React from 'react'
import HeaderSocials from "./HeaderSocials"
import { useState, useEffect } from "react";
import CTA from "./CTA"
import "./header.css"

const header = () => {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["A FullStack Web Developer", "A Mobile App Developer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
        tick();
      }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
      let i = loopNumber % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

      setText(updatedText);

      if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
  }
      if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period);
      } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNumber(loopNumber + 1);
          setDelta(500);
      }
  }
  return (
    <header>
      <div className="container header__container">
        <h5>{`Hello I'm `}</h5>
        <h1>Michael Freeman</h1>
        <h5 className="wrap">{text}</h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">

          <div className="matrix">
            <span className="char">M</span>
            <span className="char">I</span>
            <span className="char">C</span>
            <span className="char">H</span>
            <span className="char">A</span>
            <span className="char">E</span>
            <span className="char">L</span>
            <span className="char">F</span>
            <span className="char">R</span>
            <span className="char">E</span>
            <span className="char">E</span>
            <span className="char">M</span>
            <span className="char">A</span>
            <span className="char">N</span>
          </div>

          <div className="matrix__second">
            <span className="char__2">g</span>
            <span className="char__2">r</span>
            <span className="char__2">i</span>
            <span className="char__2">d</span>
            <span className="char__2">l</span>
            <span className="char__2">i</span>
            <span className="char__2">n</span>
            <span className="char__2">e</span>
          </div>

          <div className="matrix__third">
            <span className="char__3">u</span>
            <span className="char__3">l</span>
            <span className="char__3">t</span>
            <span className="char__3">r</span>
            <span className="char__3">a</span>
          </div>
        </div>  

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header 