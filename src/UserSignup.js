import React from 'react';

import './UserSignup.css';
import useSetState from './useSetState';

const initialState = {
  userName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  investmentInterest: false
};

const UserSignup = () => {
  const [state, setState] = useSetState(initialState);

  const handleSubmit = event => {
    event.preventDefault();
    clear();
  };

  const handleChange = event => {
    setState({
      [event.target.name]: event.target.value
    });
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
      <label htmlFor="investmentInterest" className="UserSignup--checkbox">
        <input
          id="investmentInterest"
          name="investmentInterest"
          type="checkbox"
          checked={state.investmentInterest}
          onChange={event =>
            setState({ investmentInterest: !event.target.checked })
          }
        />
        Do you want to maybe help us out with an angel investment?
      </label>
      <input type="Submit" />
    </form>
  );
};

export default UserSignup;
