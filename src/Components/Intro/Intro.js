import React from 'react';
import './Intro.css'
import likndin from '../../img/linkedin.png'
import facebook from '../../img/instagram.png'
import github from '../../img/github.png'
import mypic from '../../img/myPic.jpeg'
import { motion } from "framer-motion"


const Intro = () => {
      const transition ={ duration:2,type:'spring'}
      return (
            <div className='intro'>
               <div className="intro-left">
                     <div className='intro-name'>
                           <span>Hay , I Am</span>
                           <span>Shukumar Ghosh</span>
                           <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, necessitatibus.</span>
                     </div>
                     <button className='button i-button'>Hire Me</button>

                     <div className="intro-logo">
                           <img src={facebook} alt="" />
                           <img src={likndin} alt="" />
                           <img src={github} alt="" />
                     </div>
               </div> 
               <div className='intro-right'>
                     <motion.div 
                      initial={{left:'-36%'}}
                           whileInView={{left:'-10%'}}
                           transition={transition}
                      className="images">
                           <img
                          
                            src={mypic} alt=""  />
                     </motion.div>
                     <div className='blur'></div>
                     <div className='blur' style={{
                           background: '#c1f5ff',
                           top:'14rem',
                           left:'-11rem',
                           width:'21rem',
                           height:'11rem',

                     }}></div>
               </div>  
            </div>
      );
};

export default Intro;