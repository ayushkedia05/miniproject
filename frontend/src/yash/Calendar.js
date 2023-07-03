import React from 'react';
import './Calendar.css';
import tadasan from "./components/tadasan.jpg"
const ProblemOfTheDay = () => {
  return (
    <div className="container">
      <header>
        <h1 className="title">Aasan of the Day</h1>
      </header>
      <section className="problem">
        <h2 className="problem-title">Task Title</h2>
        <p className="problem-description">
        "Elevate Your Day: Mastering Tadasana for Strength and Balance"
        </p>
        <img className='img' src={tadasan} alt=" "/>
        <button className="problem-button">Do the Task</button>
      </section>

    </div>
  );
};

export default ProblemOfTheDay;
