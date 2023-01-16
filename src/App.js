import logo from './rocket.svg';
import React, { useState } from 'react';
import './App.css';
import DateTimer from './DateTimer';

const App = () => {
  const [inputDate, setInput] = useState('');
  const [myDate, setDate] = useState(inputDate);

  const reset = () => {
    setDate('');
    setInput('');
  };

  function startButton() {
    setDate(inputDate);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Content-box">
          <h1>
            READY TO LAUNCH IN...
          </h1>
          <label>
            <input type="date" value={inputDate} onChange={event => setInput(event.target.value)} className="dateInput"/>
          </label>
          <div>
            <button onClick={startButton} className="inputButton">Start</button>
            <button onClick={reset} className="inputButton">Reset</button>
          </div>
          <DateTimer date={myDate}/>
          <a
            href="https://github.com/nadersirio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="SubscribeButton">
              Subscribe
            </button>
          </a>
        </div>
      </header>
    </div>
  );
}
export default App;

