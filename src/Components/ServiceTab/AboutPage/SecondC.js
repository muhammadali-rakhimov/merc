import React,{useRef , useState} from 'react'
import {Autoplay} from 'swiper'
import { EffectCards } from "swiper"
import { Swiper , SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import secondC1 from '../../../assets/About/secondS.png'
import './SecondC.scss'
function SecondC() {
  return (
    <div className='SecondC container'>
        <div className='bContainer'>
            <div className='wrapper'>
                <div className='left_box'>
                    <h1>When you need to be Road Ready - Call the Professionals</h1>
                    <p>For 50 years, consumers have known to "Bring Your Car to Milex" for complete auto care. The Milex franchise originated as Milex Tune-Up and Brake in 1967, becoming Milex Complete Auto Care® in 2006. Milex is the source for general automotive repair and maintenance, specializing in all aspects of mechanical repair. With each of our service centers being independently owned and operated franchise locations, we strive to create customer experiences that result in satisfaction and loyalty.
                       We at Milex we understand the investment you have made and take pride in being able to help keep it road ready. Our expert technicians are trained to perform diagnostic and general repair services on all makes and models, as well as perform your factory recommended maintenance services.
                    </p>
                </div>
                <div className='right_box'>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                   
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={secondC1} />
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                  </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondC