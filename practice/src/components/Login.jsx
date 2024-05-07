import React, { useState } from 'react';
import './css/Login.css';
import { Link } from 'react-router-dom';
export default function Login() {
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {};
  return (
    <>
      <div className='container'>
        <div className='innerBox'>
          <h1 className='heading'>Login</h1>
          <input label='Email' placeholder='Enter Email here' />
          <input label='Password' placeholder='Enter your password' />
          <div className='footer'>
            <b className='error'>Error</b>
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>
              SIGN IN
            </button>
            <p>
              {"Don't have an Account yet?"}
              <span>
                <Link to='/signup'>Create an Account</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
