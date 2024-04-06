// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  let counter = 10;

  const addValue = () => {
    counter += 1;
    console.log(counter);
  };

  return (
    <>
      <h1>Welcome to the counter App</h1>
      <h2>Current value is: {counter}</h2>
      <button onClick={addValue}>Increment</button>
      <button>Decrement</button>
    </>
  );
}

export default App;
