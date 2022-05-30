import React from 'react'
import logo from './logo.svg';
import Login from '../login';

const LoginPage = () => {
    const handleButtonClicked = () => {
        alert('Hello from React!')
      }

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={handleButtonClicked}>Greetings!</button>
            <a
              className="App-link"
              href="https://github.com/veiserath/Daftcode-frontend"
              target="_blank"
              rel="noopener noreferrer">
              Link to GitHub repo
            </a>
            <Login onChange={handleButtonClicked}></Login>
          </header>
        </div>
      );
    };

export default LoginPage