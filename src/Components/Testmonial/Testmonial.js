import React from 'react';
import './Testmonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import profile1 from '../../img/profile1.jpg'
import profile2 from '../../img/profile2.jpg'
import profile3 from '../../img/profile3.jpg'
import profile4 from '../../img/profile4.jpg'



const Testmonial = () => {
      const clients =[
            {
                  img:profile1,
                  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consectetur fugit perspiciatis iure quia vitae? Dolores earum est iusto excepturi?'
                  
            },
            {
                  img:profile2,
                  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consectetur fugit perspiciatis iure quia vitae? Dolores earum est iusto excepturi?'
            },
            {
                  img:profile3,
                  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consectetur fugit perspiciatis iure quia vitae? Dolores earum est iusto excepturi?'
            }, {
                  img:profile4,
                  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consectetur fugit perspiciatis iure quia vitae? Dolores earum est iusto excepturi?'
            },

      ]
      return (
            <div className='testmonial'>
                  <div className="t-heading">
                        <span>Clients Always Get</span>
                        <span>Exceptional Work </span>
                        <span>From Me .....</span>
                  </div>
                  <div className='ss'>
                 
                        {
                              clients.map(client => 
                              <div className='t-data'>
                              <img src={client.img} alt="" /><span>{client.review}</span>
                              </div>
                        )
                        }
                        </div>
            
            </div>
      );
};

export default Testmonial;