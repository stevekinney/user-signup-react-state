# Amazing Unicorn Startup

In the base `master` branch, we have a mostly functional form. But, there are two problems.

1. Using individual state hooks for ever field is getting a bit cumbersome. It would be cool if we had something closer to `this.setState`.
2. There is no real form validation.

We're going to solve each of these in two different chapters of this workshop.

We've see that we can create our own custom hooks.

Could we create a hook that mostly works like `this.setState`.

**Spoiler alert**: Yes, we can—and we're going to do it using `useReducer`.

## Creating the Hook

```js
import { useReducer } from 'react';

const reducer = (previousState = {}, updatedState = {}) => {
  return { ...previousState, ...updatedState };
};

const useSetState = (initialState = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setState = updatedState => dispatch(updatedState);

  return [state, setState];
};

export default useSetState;
```

We could take it a step further by using a more standard action patter, but I'm not going to.

## Using It in the Application

We just make an object for the initial state of the form.

```js
const initialState = {
  userName: '',
  email: '',
  password: '',
  passwordConfirmation: ''
};
```

We can add a dymanic function for changing the state based on the field name.

```js
const handleChange = event => {
  setState({
    [event.target.name]: event.target.value
  });
};
```

And now, each input field can be refactored somewhere along the lines of this first one.

```js
<input
  id="userName"
  name="userName"
  type="text"
  value={state.userName}
  required
  onChange={handleChange}
/>
```

## Without a Reducer

You could also implement this without a reducer, but I prefer the previous patter.

```js
import { useState, useCallback } from 'react';

const useSetState = initialState => {
  const [state, set] = useState(initialState);

  const setState = useCallback(
    updatedState => {
      set(previousState => ({ ...previousState, ...updatedState }));
    },
    [set]
  );

  return [state, setState];
};

export default useSetState;

```