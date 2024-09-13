import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Function to handle the button click
  const handleButtonClick = () => {
    
    // Sending a GET request to the specified URL
    fetch('/hello',{
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }  
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Process the response data
        alert('Request sent successfully!');
      })
      .catch(error => {
        console.error('Error:', error); // Handle any errors
        alert('Error sending request.');
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Button that sends a request */}
        <button onClick={handleButtonClick} className="App-button">
          Send Request
        </button>
      </header>
    </div>
  );
}

export default App;
