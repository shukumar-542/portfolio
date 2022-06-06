import React from 'react';
import './Footer.css'
import wave from '../../img/wave.png'
import { BsFacebook,BsGithub,BsInstagram} from 'react-icons/bs';

const Footer = () => {
      return (
            <div className='footer'>
                <img src={wave} alt="" />
                <div className="footer-content">
                      <span>shukumar@gmail.com</span>
                      <div className="f-icon">
                      <BsFacebook size={'3rem'} />
                      <BsGithub size={'3rem'}/>
                      <BsInstagram size={'3rem'}/>
                      </div>
                </div>  
            </div>
      );
};

export default Footer;