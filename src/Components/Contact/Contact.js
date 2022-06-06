import './Contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
      
      const[done , setDone] = useState(false)
      const form = useRef();
      const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_5trgbnk', 'template_6lu21bs', form.current, 'tnKLhvmaaR4me6t8t')
              .then((result) => {
                  console.log(result.text);
                  setDone(true)
              }, (error) => {
                  console.log(error.text);
              });
          };

      return (
            <div className='contact-form'>
                  <div className="contact-left">
                        <div className="contact-awesome">
                              <span>Get In Touch</span>
                              <span>Contact Me..</span>
                        </div>
                        <div className='c-blur'></div>
                  </div>

                  <div className="c-right">
                        <form ref={form} onSubmit={sendEmail}>
                              <input type="text" name="user_name" className='user' id="" placeholder='Name' />
                              <input type="text" name="user_email"className='user' id="" placeholder='Email' />
                              <textarea name="message" className='user' placeholder='Message' id="" cols="30" rows="10"></textarea>
                              <input type="submit" value="Send" className='button form-button'/>
                        <span>{done && 'Thank You For sending Your message!!'}</span>

                        </form>
                        <div className='c-blur2'></div>

                        
                  </div>
            </div>
      );
};

export default Contact;