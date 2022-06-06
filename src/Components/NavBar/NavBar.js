import React from 'react';
import Toggle from '../Toggle/Toggle';
import './NavBar.css'
import {Link} from 'react-scroll';

const NavBar = () => {
      return (
            <div className='nav-wrapper'>
                  <div className="nav-left">
                        <div className="nav-name">
                              Shukumar
                        </div>
                        <Toggle/>
                  </div>
                  <div className="nav-right">
                        <div className="nav-list">
                              <ul>
                              <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass' >
                              <li>Home</li>
                              </Link>
                              <Link spy={true} to='Services' smooth={true} >
                              <li>Services</li>
                              </Link>
                              <Link spy={true} to='Exprience' smooth={true} >
                              <li>Experiance</li>
                              </Link>
                              <Link spy={true} to='Testmonial' smooth={true} >
                              <li>Testmonila</li>
                              </Link>
                              <Link spy={true} to='portfolio' smooth={true} >
                              <li>Protfolio</li>
                              </Link>
                                    
                                    
                                    
                                    
                                    
                              </ul>
                        </div>
                        <button className='button' >Contact</button>
                  </div>
            </div>
      );
};

export default NavBar;