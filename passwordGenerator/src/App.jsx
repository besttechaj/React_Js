import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  console.log('App component re-rendering');

  /*
  // useCallback Hook
  It is a react hook that lets you cached a function definition between re-renders. Hence you are optimizing while re-rendering.

  This allows us to isolate resource intensive functions so that they will not automatically run on every render.The useCallback Hook only runs when one of its dependencies update.It can improve performance.

 //* dependencies: If there any changes in the dependencies, it will run the function
  //? syntax: useCallback( function, [ dependency array ] )

  //!Note: The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function

  */

  const [length, setLength] = useState(5);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  //* useRef Hook: Used to get the reference.
  let passwordRef = useRef(null); // default value is null

  //* optimizing the function
  const copyPasswordToClipboard = useCallback(() => {
    //! To target the element we are using useRef hook instead of password because password is a state not an element hence we are providing one reference to the password input element to manipulate some changes. By taking reference we can easily use some built-in methods to manipulate it.

    console.log(passwordRef.current); // current selected element

    // if there is any element present inside passwordRef then call the select() method to select the text inside that element( hence we are achieving text highlight)
    passwordRef.current?.select();

    //* to get the selected range [ in future if there is a need]
    // passwordRef.current?.setSelectionRange(0, 3);

    //! window, navigator, clipboard is an object in javascript
    //! clipboard.writeText(element_reference): to write to the clipboard
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //* for optimization: It will not run until there is any change of its dependencies. re-rendering can't run it without any change in callback hook's dependency.
  const generatePassword = useCallback(
    () => {
      console.log('running callback hook');
      let pass = '';

      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

      if (charAllowed) str += '!@#$&*?`~/_+-^';

      if (numberAllowed) str += '0123456789';

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
  //* useEffect will run during the first rendering of the component but once after it will run if there is any change in its dependency.
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
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
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
