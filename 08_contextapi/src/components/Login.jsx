import React, { useRef, useContext } from 'react';
import { UserContext } from '../context/UserContext';

//* uncontrolled login form using FBC: onSubmit (fetching the data)
export default function Login() {
  let userID = useRef();
  let userPWD = useRef();

  //! fetching the data from the global context using "useContext() route" and destructuring the inside data
  let { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    //! updating the context's state data hence the component will re-render
    setUser({ id: userID.current.value, pwd: userPWD.current.value });

    // to reset the input field again
    userID.current.value = '';
    userPWD.current.value = '';
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>username</label>
        <input type='text' name='username' id='username' ref={userID} />
        <br />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' ref={userPWD} />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
