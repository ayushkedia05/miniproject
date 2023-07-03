import React, { useState } from 'react';
import './ChatBot.css'; // CSS file for styling
import docchat from './components/docchatbot.jpg'
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue !== '') {
      // Add user message to the chat
      setMessages([...messages, { text: inputValue, isUser: true }]);
      // Process user input and generate bot response
      processUserInput(inputValue);
      // Clear input field
      setInputValue('');
    }
  };

  const processUserInput = (userInput) => {
    // Placeholder logic for processing user input and generating bot response
    const botResponse = generateBotResponse(userInput);
    setMessages([...messages, { text: botResponse, isUser: false }]);
  };

  const generateBotResponse = (userInput) => {
    // Placeholder logic for generating bot response based on user input
    // You can replace this with your own logic or integrate with an API
    const predefinedData = {
        paracetamol: {
            question: 'Which medicine should I take for fever?',
            answer: 'Paracetamol is a common over-the-counter medicine used to reduce fever and relieve mild to moderate pain. Follow the recommended dosage instructions.',
          },
          ibuprofen: {
            question: 'Is ibuprofen recommended for fever?',
            answer: 'Yes, ibuprofen is another option for reducing fever and managing pain. However, it is important to follow the recommended dosage and consult with a healthcare professional if needed.',
          },
          acetaminophen: {
            question: 'Can I use acetaminophen for fever?',
            answer: 'Yes, acetaminophen is another name for paracetamol. It is safe and effective for reducing fever and relieving pain when used as directed.',
          },
          coldTablets: {
            question: 'Which tablets should I take for a common cold?',
            answer: 'Some commonly used cold tablets include decongestants like pseudoephedrine, antihistamines like loratadine, and pain relievers like acetaminophen. It is best to consult with a healthcare professional or pharmacist for specific recommendations based on your symptoms and medical history.',
          },
          // Medicine for Cough
          coughSyrup: {
            question: 'What cough syrup should I take for a persistent cough?',
            answer: 'There are different types of cough syrups available, such as those containing dextromethorphan or codeine. It is recommended to consult with a healthcare professional to determine the most suitable cough syrup for your specific cough.',
          },
      fever: {
        question: 'What are the common symptoms of fever?',
        answer: 'Common symptoms of fever include high body temperature, headache, body aches, and fatigue.',
      },
      cold: {
        question: 'How can I treat a common cold?',
        answer: 'To treat a common cold, you can try getting plenty of rest, staying hydrated, and taking over-the-counter cold medications to alleviate symptoms.',
      },
      cough: {
        question: 'What are the symptoms of a cough?',
        answer: 'Symptoms of a cough can include a persistent or recurrent dry or wet cough, sore throat, and chest discomfort.',
      },
      dengue: {
        question: 'What are the symptoms of dengue?',
        answer: 'Symptoms of dengue may include high fever, severe headache, joint and muscle pain, rash, and bleeding.',
      },
      typhoid: {
        question: 'What are the symptoms of typhoid?',
        answer: 'Symptoms of typhoid can include high fever, headache, abdominal pain, weakness, and loss of appetite.',
      },
      malaria: {
        question: 'What are the symptoms of malaria?',
        answer: 'Symptoms of malaria may include fever, chills, headache, muscle aches, fatigue, and nausea.',
      },
      

    };

    const matchedQuestion = Object.keys(predefinedData).find((key) => userInput.toLowerCase().includes(key));
    if (matchedQuestion) {
      return predefinedData[matchedQuestion].answer;
    } else {
      return "I'm sorry, I don't have an answer to that question.";
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <img src={docchat} alt="Chatbot" className="chatbot-image" />
        <h2>Medical Chatbot</h2>
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`}>
            <div className={`message-bubble ${message.isUser ? 'user-bubble' : 'bot-bubble'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form className="chatbot-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Type your question..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
