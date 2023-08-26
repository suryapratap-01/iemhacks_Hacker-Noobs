import React, { useState, useEffect } from 'react';
import './Bot.css';
import axios from 'axios';

function Bot() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (userInput.trim() === '') {
      return;
    }
    const newMessage = { type: 'user', content: userInput };
    setMessages([...messages, newMessage]);
    setUserInput('');

    try {
      const response = await axios.post('http://localhost:5000/generate-response', {
        inputText: userInput,
      });

      const responseData = response.data;
      const botResponse = { type: 'bot', content: responseData.response };
      setMessages([...messages, newMessage, botResponse]);
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  return (
    <div className="bot_container">
      <h1>Legal Bot</h1>
      <div className="national_emblem">
        <img className="national_emblem_image" src="/images/image1.png" alt="national emblem" />
      </div>

      <div className="chat-box">
        <div className="bot_input-container">
          <input
            className="bot_input"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button className="bot_send_button" onClick={sendMessage}>
            Send
          </button>
        </div>
        {messages.length > 0 && (
          <div className="messages">
            {messages.slice().reverse().map((message, index) => (
              <div key={index} className={`message ${message.type}-message`}>
                {message.content}
              </div>
            ))}
          </div>
          
        )}
      </div>
    </div>
  );
}

export default Bot;
