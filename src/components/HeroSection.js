import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {Link } from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';

function HeroSection() {
  return (
      <section id="home">
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1><img name="cseslogo" src="/images-copy/UCSanDiegoLogo-White.png"
               width = "280" height = "60" alt="logo"></img></h1>

      <h3>Computer Science & Engineering Society</h3>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Connecting CSE Community</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        <a class="event-link-btn" href="https://www.facebook.com/csesucsd/">Facebook Group</a>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
           <form action="//ucsd.us12.list-manage.com/subscribe/post?u=fe523e83d20e97f4c9c0a1071&amp;id=678953a0c1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">Subscribe</form>
        </Button>
      </div>
    </div>
      </section>
  );
}

export default HeroSection;
