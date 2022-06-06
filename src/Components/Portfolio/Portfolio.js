import React from 'react';
import './portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import sidebar from '../../img/sidebar.png'
import ecommerce from '../../img/ecommerce.png'
import music from '../../img/musicapp.png'
import hoc from '../../img/hoc.png'
const Portfolio = () => {
      return (
            <div className='portfolio' id='portfolio'>
                  <span>Recent Projects</span>
                  <span>Protfolio</span>
                  <Swiper
                        className='protfolio-slider'
                        spaceBetween={30}
                        slidesPerView={3}
                  >
                        <SwiperSlide><img src={sidebar} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={ecommerce} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={hoc} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={music} alt="" /></SwiperSlide>
                        
                  </Swiper>
            </div>
      );
};

export default Portfolio;