import React from 'react'
import "./testimonials.css" 
import Avatar1 from "../../assets/images/avatar1.jpg"



// Import Swiper Styles
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: Avatar1,
    name: "Clients",
    review: "I'm proud to say that my work has consistently received positive feedback from my clients. Check back soon to read some of their testimonials!"

  },
]

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}  
        pagination={{ clickable: true }}
      >

      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div>
                <div className="client__avatar">
                  <img src={avatar} alt="client-image1" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </div>
            </SwiperSlide>
          ) 
        })
      }
      </Swiper>
    </section> 
  )
}

export default testimonials