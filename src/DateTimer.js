import React, { useState } from 'react';
import './App.css';

const DateTimer = ({ date }) => {

  const [today, setToday] = useState(new Date().getTime());
  setTimeout(() => {
    setToday(new Date().getTime());
  }, 1000);

  if (!date) {
    return null;
  }

  const endDate = new Date(date).getTime();
  if(endDate < today) {
    return (
      <div>
        <p>Esta data ja passou!</p>
      </div>
    )
  }

  const difference = endDate - today;
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const years = days * 365;

  const yearRemaining = Math.floor(difference / years).toString().padStart(2, '0');
  const dayRemaining = Math.floor((difference % years) / days).toString().padStart(2, '0');
  const hoursRemaining= Math.floor((difference % days) / hours).toString().padStart(2, '0');
  const minutesRemaining = Math.floor((difference % hours) / minutes).toString().padStart(2, '0');
  const secondsRemaining = Math.floor((difference % minutes) / seconds).toString().padStart(2, '0');

  return (
  <div className="content-timer">
    <div className="DateLayout">
      <p>Years</p>
      <p>{yearRemaining}</p>
    </div>
    <p className='doublePointTimer'> : </p>
    <div className="DateLayout">
      <p>Days</p>
      <p>{dayRemaining}</p>
    </div>
    <p className='doublePointTimer'> : </p>
    <div className="DateLayout">
      <p>Hours</p>
      <p>{hoursRemaining}</p>
    </div>
    <p className='doublePointTimer'> : </p>
    <div className="DateLayout">
      <p>Minutes</p>
      <p>{minutesRemaining}</p>
    </div>
    <p className='doublePointTimer'> : </p>
    <div className="DateLayout">
      <p>Seconds</p>
      <p>{secondsRemaining}</p>
    </div>
  </div>
  )
}
export default DateTimer;