import React, { useState, useEffect } from 'react';
import './Bot.css';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

function Bot() {
  const [userInput, setUserInput] = useState('');
  const [fetchedMessages, setFetchedMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false); // New state for delete loading
  const [deleteMode, setDeleteMode] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/get-messages')
      .then(response => {
        setFetchedMessages(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  }, []);

  const sendMessage = async () => {
    if (userInput.trim() === '') {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/generate-response', {
        inputText: userInput,
      });

      const responseData = response.data;
      const newUserMessage = { type: 'user', content: userInput };
      const botResponse = { type: 'bot', content: responseData.response };
      setFetchedMessages([botResponse, newUserMessage, ...fetchedMessages].reverse());
    } catch (error) {
      console.error('Error sending request:', error);
    } finally {
      setIsLoading(false);
      setUserInput('');
    }
  };

  const handleDeleteMessages = async () => {
    if (deleteMode) {
      setIsLoadingDelete(true); 
      try {
        await axios.delete('http://localhost:5000/delete-messages');
        setFetchedMessages([]);
      } catch (error) {
        console.error('Error deleting messages:', error);
      } finally {
        setIsLoadingDelete(false); 
      }
    }
    setDeleteMode(!deleteMode);
  };

  return (
    <div className="bot_container">
      <div className="national_emblem">
        <img className="national_emblem_image" src="/images/image1.png" alt="national emblem" />
      </div>

      <div className="chat-box">
        <div className="bot_input-container">
        <button
          className={`message_delete_icon ${isLoadingDelete ? 'delete-mode' : ''}`}
          onClick={handleDeleteMessages}
          disabled={isLoadingDelete} 
        >
          {isLoadingDelete ? (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <FaTrash />
          )}
        </button>
          <input
            className="bot_input"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            className={`bot_send_button ${isLoading ? 'loading-button' : ''}`}
            onClick={sendMessage}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              'Send'
            )}
          </button>

        </div>
        
        <div className="messages">
        {fetchedMessages.slice().reverse().map((message, index) => (
          <div key={index} className={`message ${message.type}-message`}>
            {message.content}
          </div>
        ))}

        </div>
      </div>
    </div>
  );
}

export default Bot;
