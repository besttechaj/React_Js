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

    //! When you call the setState() function in React, React schedules an update rather than immediately applying the changes. This allows React to batch multiple state updates together, minimizing unnecessary re-renders and improving overall efficiency.That is It will render the component after complete execution of the event function.

    //! If you call setState() multiple times within the same function like below code, React will merge the updates into a single update and apply them all at once. This means that the component will only re-render once, even though you called setState() multiple times.
    // suppose counter =0
    setCounter(counter + 1); //1
    setCounter(counter + 1); //1
    setCounter(counter + 1); //1
    setCounter(counter + 1); //1
    setCounter(counter + 1); //1

    //! In React, state updates are asynchronous. This means that when you call a function that updates the state, React does not wait for the state to be updated before executing the next line of code. This can cause problems if you are trying to log the state value immediately after updating it, because the state will not have been updated yet.To fix this, you can move the console.log statement outside of the handleClick function, or you can use a callback function to log the state value after it has been updated.
    console.log(counter); // This will log the previous state value

    //! In some cases, you may want to avoid this behavior. For example, if you are updating the state based on user input, you may want to re-render the component immediately after each state update. To do this, you can pass a callback function to the setState() function. The callback function will be called after the state has been updated and the component has been re-rendered.
    //* you need call back function to immediately involved the component's re-rendering as soon as state change.
    // suppose counter = 0
    setCounter((counter) => counter + 1); //1
    setCounter((counter) => counter + 1); //2
    setCounter((counter) => counter + 1); //3
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  //! in short: React processes state updates after event handlers have finished running. This is called batching. To update some state multiple times in one event, you can use setNumber(n => n + 1) updater function.

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
