import React from 'react';
import './Services.css'
import heart from '../../img/heartemoji.png'
import glassess from '../../img/glasses.png'
import hamble from '../../img/humble.png'
import Card from '../Card/Card';
import { motion } from "framer-motion"


const Services = () => {
      const transition = {duration:3, type:'spring'}
      return (
            <div className='services'id='Services'>
            {/* left side awesome */}
                  <div className="awesome">
                        <span>My Awesome</span>
                        <span>Services</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing
                        <br />
                         elit. At, incidunt.</span>
                         <button className='button s-button'>Cv Download</button>
                         <div className='blur s-blur'></div>
                  </div>


            {/* right side awesome */}
            <motion.div
            initial={{left:'14rem'}}
            whileInView={{left:'10%'}}
            transition={transition}
             className="s-card">
                  <div style={{left:'14rem'}}>
                  <Card heart={heart}
                        heading ={'Design'}
                        details={'figma,sketch, photoshop'}
                  />
                  </div>


                  <div style={{top:'12rem', left:'-4rem'}}>
                  <Card heart={glassess}
                        heading ={'Developer'}
                        details={'Html,Css,Js,Python,Django,React'}
                  />
                  </div>


                  <div style={{top:'19rem',left:'12rem'}}>
                  <Card heart={hamble}
                        heading ={'UI/UX'}
                        details={'Html,Css,Js,Python,Django,React'}
                  />
                  </div>
                  
            </motion.div>
            </div>
      );
};

export default Services;