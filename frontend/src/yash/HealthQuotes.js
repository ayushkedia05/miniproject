import React from "react";
import "./HealthQuotes.css";
import ab from './components/ab.jpg';
import dc from './components/dc.jpg';
import sm from './components/sm.jpg';


const HealthQuotes = () => {
  return (
    <>
    <center><h1>What our Doctors say......</h1></center>
    <div className="quote-container">
        <div className="quote">
          <img src={dc} alt="doctor" className="quote-image" />
          <div className="quote-content">
            <h3 className="quote-text">"The body is a self-healing organism, so it's really about clearing things out of the way so the body can heal itself."</h3>
            <p className="quote-doctor">-"Dr. Deepak Chopra"</p>
          </div>
        </div>
        <div className="quote">
          <img src={ab} alt="doctor" className="quote-image" />
          <div className="quote-content">
            <h3 className="quote-text">"Your body hears everything your mind says. Stay positive."</h3>
            <p className="quote-doctor">-"Dr. Anita Bharadwaj"</p>
          </div>
        </div>
        <div className="quote">
          <img src={sm} alt="doctor" className="quote-image" />
          <div className="quote-content">
            <h3 className="quote-text">"You don’t need to be better than anyone else. You just need to be better than you used to be."</h3>
            <p className="quote-doctor">-"Dr. Siddhartha Mukharjee"</p>
          </div>
        </div>
    </div>
    </>
  );
};

export default HealthQuotes;
