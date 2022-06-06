import React from 'react';
import './Toggle.css'
import { BsFillMoonFill,BsFillSunFill } from 'react-icons/bs';


const Toggle = () => {
      return (
            <div className='toggle'>
                  <BsFillSunFill/>
                  <BsFillMoonFill size={'.7rem'}/>
                  <div className="t-button"></div>
            </div>
      );
};

export default Toggle;