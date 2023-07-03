import React, { useState } from 'react';
import './AppointmentForm.css';
import book from './components/book.jpg';
const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
const [mobnumber,setMobileNumber]=useState('');
const [symptoms,setSymptoms]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  

  return (
    <div className="appointment-form-container">
    <img src={book} alt="Book"/>
    <div className='cont'>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Mobile Number:
          <input
            type="text"
            value={mobnumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <label>
          Symptoms:
          <input
            type="text"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            required
          />
        </label>
        <button type="submit" onClick={()=>
        alert(`https://meet.google.com/wxe-qznv-djh is the your link for instant appointment with our doctor` )
        }>Book Now</button>
      </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
