import logo from './rocket.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [inputDate, setInput] = useState('');
  let [myDate, setDate] = useState(inputDate);

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

function DateTimer({ date }) {
  if (!date) {
    return null;
  }

  const endDate = new Date(date).getTime();
  const today = new Date().getTime();
  const difference = endDate - today;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const years = days * 365;

  let yearRemaining = Math.floor(difference / years).toString().padStart(2, '0');
  let dayRemaining = Math.floor((difference % years) / days).toString().padStart(2, '0');
  let hoursRemaining= Math.floor((difference % days) / hours).toString().padStart(2, '0');
  let minutesRemaining = Math.floor((difference % hours) / minutes).toString().padStart(2, '0');
  let secondsRemaining = Math.floor((difference % minutes) / seconds).toString().padStart(2, '0');

  const result = yearRemaining  + ":" +  dayRemaining  + ":" +  hoursRemaining  + ":" +  minutesRemaining  + ":" +  secondsRemaining;
  console.log(result)
  Aaa(result)
  return (
  <div className="DateLayout">
  <p>year Day Hours Minutes Seconds</p>
  <p className="dates">{`${yearRemaining + ":" + dayRemaining + ":" + hoursRemaining + ":" + minutesRemaining + ":" + secondsRemaining}`}</p>
  </div>
  )
}

function Aaa({ result }) {
  const [finalTime, setFinal] = useState(result);

  useEffect(() => {
    <div>
      <p>time remaining</p>
      {setFinal(result)};
    </div>
  });
  return (
    <div>
      <p>time remaining</p>
      `${finalTime}`;
    </div>
  )
}
export default App;

