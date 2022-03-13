import React,{useRef,useState} from 'react'
import {Autoplay} from 'swiper'
import { Swiper , SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import firstC1 from '../../../assets/About/firstC1.png'
import firstC2 from '../../../assets/About/firstC2.png'
import firstC3 from '../../../assets/About/firstC3.png'
import './FirstC.scss'

function FirstC() {
  return (
    <div className='firstC container'>
        <div className='container-fluid bContainer'>
        <Swiper 
          watchSlidesProgress={true} 
          slidesPerView={5}
          // pagination= {{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }} 
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper">
          <SwiperSlide><img alt='This is Imagee' src={firstC1} /></SwiperSlide>
          <SwiperSlide><img alt='This is Imagee' src={firstC2} /></SwiperSlide>
          <SwiperSlide><img alt='This is Imagee' src={firstC3} /></SwiperSlide>
          <SwiperSlide><img alt='This is Imagee' src={firstC1} /></SwiperSlide>
          <SwiperSlide><img alt='This is Imagee' src={firstC2} /></SwiperSlide>
          <SwiperSlide><img alt='This is Imagee' src={firstC3} /></SwiperSlide>
          <SwiperSlide><img alt='This is Imagee' src={firstC1} /></SwiperSlide>
          <SwiperSlide><img alt='This is Imagee' src={firstC2} /></SwiperSlide>
          <SwiperSlide><img alt='This is Imagee' src={firstC3} /></SwiperSlide>
          <SwiperSlide><img alt='This is Imagee' src={firstC2} /></SwiperSlide>
          <SwiperSlide><img  alt='This is Imagee' src={firstC3} /></SwiperSlide>
          <SwiperSlide><img alt='This is Imagee' src={firstC1} /></SwiperSlide>
          <SwiperSlide><img alt='This is Imagee' src={firstC2} /></SwiperSlide>
          <SwiperSlide><img alt='This is Imagee' src={firstC3} /></SwiperSlide>
         </Swiper>
         <div className='someAbout'>
             <div className='right_box'>
                 <h1>Providing quality, reliable and cost-effective car services</h1>
             </div>
             <div className='left_box'>
             We are changing the way of car maintenance trends throughout Gurgaon NCR which by providing access of
              various car services under one roof. With the strong team of highly experienced mechanics with multi 
              brand car knowledge, we are providing the 
             best services for your car within the budget and as per your comforts, you stay at your home 
             or office while we serve your car with complementary pickup and drop.
             </div>
         </div>
        </div>
    </div>
  )
}

export default FirstC