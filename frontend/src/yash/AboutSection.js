import React from 'react';
import './AboutSection.css'; // Import your CSS file
import dietplan from './components/dietplan.jpg';
import exercise from './components/exercise.webp';
import pma from './components/pma.jpg';
import remote from './components/remotemonitor.jpg';
import telemedicine from './components/telemedicine.jpg';
import aipower from './components/aipower.jpg';
const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <center><h1>HEALTHO</h1></center>
        <p>
          Welcome to our Hospital Management System! We provide a comprehensive range of services to ensure your health and well-being.
        </p>
        <div className="features">
          <div className="feature">
            <img src={exercise} alt="Exercise Plan" />
            <h3>Exercise Plan</h3>
            <p>Stay fit with our personalized exercise plans designed to meet your specific needs.</p>
          </div>
          <div className="feature">
            <img src={dietplan} alt="Diet Plan" />
            <h3>Diet Plan</h3>
            <p>Get a customized diet plan from our expert nutritionists to maintain a healthy lifestyle.</p>
          </div>
          <div className="feature">
            <img src={aipower} alt="AI-powered Diagnostics" />
            <h3>AI-powered Diagnostics</h3>
            <p>Our advanced AI technology assists in accurate and efficient diagnostics for better treatment.</p>
          </div>
          <div className="feature">
            <img src={remote} alt="Remote Monitoring" />
            <h3>Remote Monitoring</h3>
            <p>Monitor your health remotely using our cutting-edge devices and stay connected with your healthcare team.</p>
          </div>
          <div className="feature">
            <img src={telemedicine} alt="Telemedicine" />
            <h3>Telemedicine</h3>
            <p>Consult our experienced doctors remotely through video calls, ensuring convenient healthcare access.</p>
          </div>
          <div className="feature">
            <img src={pma} alt="Personal Medical Analysis" />
            <h3>Personal Medical Analysis</h3>
            <p>Gain insights into your medical data with our personalized analysis, empowering you to make informed decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
