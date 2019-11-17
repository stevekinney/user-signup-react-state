import React from 'react';
import UserSignup from './UserSignup';

import './Application.css';

const Application = () => {
  return (
    <div className="Application">
      <header>
        <h1>Amazing Unicorn Startup</h1>
        <p>
          We don't actually have a product or a way to make money yet, but why
          don't you sign up anyway so that you can squat on your username just
          in case?
        </p>
      </header>
      <UserSignup />
    </div>
  );
};

export default Application;
