import React from 'react';
import './Works.css'
import upwork from '../../img/Upwork.png'
import fiver from '../../img/fiverr.png'
import amazon from '../../img/Shopify.png'
import  facebook from '../../img/Facebook.png'
import spotyfy from '../../img/amazon.png'
import { motion } from "framer-motion"


const Works = () => {
      return (
            <div className='Works'>
                  <div className="w-left">
                        <span>Works For All These</span>
                        <span>Brands & Clients</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                        <br />
                        Lorem ipsum dolor sit amet.</span>
                        <button className="button  w-button">Hire Me</button>
                        <div className='w-blur'></div>
                  </div>
                  <div className='w-right'>
                        <motion.div
                        initial={{rotate:'45'}}
                        whileInView={{rotate:0}}
                        viewport={{margin:'-40px'}}
                        transition={{duration:'3.5', type:'spring'}}
                         className="w-maincircle">
                              <div className="w-seccircle">
                                    <img src={upwork} alt="" />
                              </div>
                              <div className="w-seccircle">
                                    <img src={fiver} alt="" />
                              </div>  
                              <div className="w-seccircle">
                                    <img src={amazon} alt="" />
                              </div>  
                              <div className="w-seccircle">
                                    <img src={facebook} alt="" />
                              </div>
                              <div className="w-seccircle">
                                    <img src={spotyfy} alt="" />
                              </div>
                        </motion.div>
                        <div className='back-circle innner-back1'></div>
                        <div className='back-circle inner-back2'></div>

                  </div>
            </div>
      );
};

export default Works;