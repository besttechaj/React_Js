import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function App() {
  //* usState: It is a hook which is used to propagate the state inside your UI.

  //* syntax: const [initialState, setInitialStateFunction_Name]= useState(default_value)
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
    //! console will give you previous counter value.
    console.log('counter_value: ', counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Welcome to the counter App</h1>
      <h2>Current value is: {counter}</h2>
      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
    </>
  );
}

export default App;
