import React from 'react';
import './TaskOfTheDay.css'; // Import the CSS file for styling
import fitness from './components/fitnessband.jpg';
import smartwatch from './components/smartwatch.jpg';
import hm from './components/healthmeter.webp';
import Calan from './Calendar'
import tshirt  from './components/tshirt.jpg';
const TaskOfTheDay = () => {

  return (
    <div className="task-container">
      <Calan></Calan>
      <h1 className="title">Win Exciting Prizes!</h1>
      <p className="description">Continue the streak for days to win amazing rewards.</p>
      <div className="prizes-container">
      <div className="prize-card">
        <img src={fitness} alt="" className="prize-image" />
        <p className="prize-name">Healtho Fitness Band</p>
        <p className="prize-points">Points: 50</p>
      </div>
      <div className="prize-card">
        <img src={tshirt} alt="tshirt" className="prize-image" />
        <p className="prize-name">Healtho T-shirt</p>
        <p className="prize-points">Points: 100</p>
      </div>
      <div className="prize-card">
        <img src={hm} alt="smartwatch" className="prize-image" />
        <p className="prize-name">Healtho Health-meter</p>
        <p className="prize-points">Points: 150</p>
      </div>
      <div className="prize-card">
        <img src={smartwatch} alt=" " className="prize-image" />
        <p className="prize-name">Healtho SmartWatch</p>
        <p className="prize-points">Points: 200</p>
      </div>
      </div>
    </div>
  );
};

export default TaskOfTheDay;
