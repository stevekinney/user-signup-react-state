import React, { useState } from 'react';
import useSetState from './useSetState';

import './UserSignup.css';

const initialState = {
  userName: '',
  email: '',
  password: '',
  passwordConfirmation: ''
};

const UserSignup = () => {
  const [state, setState] = useSetState(initialState);

  const handleChange = event => {
    setState({
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    clear();
  };

  const clear = () => {
    setState(initialState);
  };

  return (
    <form className="UserSignup" onSubmit={handleSubmit}>
      <label htmlFor="userName">User Name</label>
      <input
        id="userName"
        name="userName"
        type="text"
        value={state.userName}
        required
        onChange={handleChange}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        value={state.email}
        required
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={state.password}
        required
        onChange={handleChange}
      />
      <label htmlFor="passwordConfirmation">Confirm Password</label>
      <input
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        value={state.passwordConfirmation}
        required
        onChange={handleChange}
      />
      <input type="Submit" />
    </form>
  );
};

export default UserSignup;
