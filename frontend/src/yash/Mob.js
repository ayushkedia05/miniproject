import React, { useState } from 'react';
import axios from 'axios';

const Mob = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSendGMeetLink = () => {
    // Generate random Google Meet link
    const randomMeetLink = generateRandomMeetLink();

    // Send SMS with the link
    sendSMS(mobileNumber, randomMeetLink);

    // Reset the input field
    setMobileNumber('');
  };

  const generateRandomMeetLink = () => {
    // Logic to generate a random Google Meet link
    // You can use any method or library to generate a random string or link here
    // For simplicity, let's assume a random 8-character alphanumeric string
    const randomString = Math.random().toString(36).substring(2, 10);
    const meetLink = `https://meet.google.com/${randomString}`;

    return meetLink;
  };

  const sendSMS = async (number, message) => {
    try {
      await axios.post('/send-sms', { number, message });
      console.log('SMS sent successfully!');
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  return (
    <div>
      <h1>Send Google Meet Link</h1>
      <input
        type="tel"
        placeholder="Enter mobile number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <button onClick={handleSendGMeetLink}>Send</button>
    </div>
  );
};

export default Mob;
