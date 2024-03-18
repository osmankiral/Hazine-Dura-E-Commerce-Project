import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/swiperStyles.css";
import Banner1 from '../public/banner1.png'
import Banner2 from '../public/banner2.png'
import Banner3 from '../public/banner3.png'

const Slider = () => {
  return (
    <div>
      <Swiper className="mySwiper">
        <SwiperSlide>
            <img  src={Banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Banner3} alt="" />
        </SwiperSlide>  
      </Swiper>
    </div>
  );
};

export default Slider;
