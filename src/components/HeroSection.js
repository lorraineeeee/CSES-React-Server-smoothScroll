import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
      <section id="home">
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1><img name="cseslogo" src="/images-copy/UCSanDiegoLogo-White.png"
               width = "280" height = "60" alt="logo"></img></h1>

      <h3>Computer Science & Engineering Society</h3>

      <p>Connecting CSE Community</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Facebook Group
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Subscribe
        </Button>
      </div>
    </div>
      </section>
  );
}

export default HeroSection;
