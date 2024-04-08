import { useState, useCallback, useEffect } from 'react';
import './App.css';

function App() {
  console.log('App component re-rendering');

  //! useCallback Hook: It is a react hook that lets you cached a function definition between re-renders. Hence you are optimizing while re-rendering.
  //* dependencies: If there any changes in the dependencies, it will run the function
  //! syntax: useCallback( function, [ dependency array ] )

  const [length, setLength] = useState(4);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(
    () => {
      console.log('running call back function');
      let pass = '';

      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

      if (charAllowed) str += '!@#$&*?`~/_+-^';

      if (numberAllowed) str += '0123456789';

      console.log('length is: ', length); // [default_value: 8]

      // iterating the str to get the random value
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);

        pass += str.charAt(char);
      }
      setPassword(pass);
    },

    // dependencies
    [length, numberAllowed, charAllowed, setPassword]
  );

  //* useEffect: This hook is used to synchronize a component with the external system.
  //* syntax: useEffect( callback fn, [ dependency array ] )
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          // ref={passwordRef}
        />
        <button
          // onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
