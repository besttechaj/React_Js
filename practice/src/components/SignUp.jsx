import { useState } from 'react';
import './css/SignUp.css';
import { Link } from 'react-router-dom';
export default function SignUp() {
  const handleSubmission = () => {};

  let [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  return (
    <>
      <div className='container'>
        <div className='innerBox'>
          <h1 className='heading'>Signup</h1>
          <input label='Name' placeholder='Enter Email Name' />

          <input label='Email' placeholder='Enter Email here' />

          <input label='Password' placeholder='Enter your password' />

          <div className='footer'>
            <button onClick={handleSubmission} disabled={submitButtonDisabled}>
              SIGN UP
            </button>
            <p>
              Already have an account?
              <span>
                <Link to='/login'>Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
