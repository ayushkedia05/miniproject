import React, { useState } from 'react';
const nodemailer = require('nodemailer');
const SendMail = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate random Google Meet link
    const randomMeetLink = generateRandomMeetLink();

    // Send email with the link
    sendEmail(email, randomMeetLink);
    
    // Reset the form
    setEmail('');
  };

  const generateRandomMeetLink = () => {
    // Logic to generate a random Google Meet link
    // You can use any method or library to generate a random string or link here
    // For simplicity, let's assume a random 8-character alphanumeric string
    const randomString = Math.random().toString(36).substring(2, 10);
    const meetLink = `https://meet.google.com/${randomString}`;

    return meetLink;
  };

  const sendEmail = (toEmail, link) => {

       const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yashshah2280@gmail.com',
        pass: '@yashriteshshah22'
      }
    });

    const mailOptions = {
      from: 'yashshah2280@gmail.com',
      to: toEmail,
      subject: 'Google Meet Link',
      text: `Here's your random Google Meet link: ${link}`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };

  return (
    <div>
      <h1>Send Google Meet Link</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMail;
