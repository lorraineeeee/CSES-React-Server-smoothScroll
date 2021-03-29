import React from 'react';
import './Contact.css';
import { Button } from './Button';
export default function Contact(){
    return (
      <section id="contact">
        <div className="contact-container">
            <h1>Contact</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='input-areas'>
              <h2>Name:</h2>
              <form>
                <input
                  className='footer-input'
                  name='name'
                  type='name'
                  placeholder='Your Name'
                />

              </form>
              <h2>Eamil:</h2>
              <form>
                <input
                  className='footer-input'
                  name='email'
                  type='email'
                  placeholder='Your Email'
                />

              </form>
              <h2>Message:</h2>
              <form>
                <input
                  className='footer-input'
                  name='message'
                  type='message'
                  placeholder='Your Message'
                />

              </form>
              <Button buttonStyle='btn--outline'>Submit!</Button>
            </div>
        </div>

      </section>
    );
}
