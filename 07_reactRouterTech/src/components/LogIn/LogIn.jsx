import React from 'react';
import './LogIn.css';
function LogIn() {
  return (
    <div>
      <div className='container'>
        <label>Username : </label>
        <input
          type='text'
          placeholder='Enter Username'
          name='username'
          required
        />
        <label>Password : </label>
        <input
          type='password'
          placeholder='Enter Password'
          name='password'
          required
        />
        <button type='submit'>Login</button>
        <button type='button' className='cancelbtn'>
          Cancel
        </button>
        Forgot <a href='#'> password? </a>
      </div>
    </div>
  );
}

export default LogIn;
