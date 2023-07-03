import React from 'react';
import bgpic from './../../images/health.jpg'
import { Button } from './Button';
import './HeroSection.css';
import Yashhome from './../../yash/Home'
import Plans from './../../yash/Plans'
import Quotes from './../../yash/HealthQuotes'
import HealthQuotes from './../../yash/HealthQuotes';


function HeroSection() {

  const myStyle={
    backgroundImage: `url(${bgpic})`,
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div>
    <div className='hero-container' style={myStyle}>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Become healthy NOW</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         get started
        </Button>

       
      </div>
    </div>
       <Plans/>
       <Yashhome/>
       <HealthQuotes/>

      </div>
  );
}

export default HeroSection;
