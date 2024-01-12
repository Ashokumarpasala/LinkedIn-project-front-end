// ToastNotification.js
import React, { useState, useEffect } from 'react';
import './toast.css';

const Toster = () => {
  const [isActive, setIsActive] = useState(false);
  const [isProgressActive, setIsProgressActive] = useState(false);
  let timer1, timer2;

  const showToast = () => {
    setIsActive(true);
    setIsProgressActive(true);

    timer1 = setTimeout(() => {
      setIsActive(false);
    }, 5000);

    timer2 = setTimeout(() => {
      setIsProgressActive(false);
    }, 5300);
  };

  const closeToast = () => {
    setIsActive(false);

    setTimeout(() => {
      setIsProgressActive(false);
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
  };

  return (
    <div className={`toast ${isActive ? 'active' : ''}`}>
      <div className="toast-content">
        <i className="fas fa-solid fa-check check"></i>

        <div className="message">
          <span className="text text-1">Success</span>
          <span className="text text-2">Your changes have been saved</span>
        </div>
      </div>
      <i className="fa-solid fa-xmark close" onClick={closeToast}></i>

      <div className={`progress ${isProgressActive ? 'active' : ''}`}></div>
    </div>
  );
};

export default Toster;
