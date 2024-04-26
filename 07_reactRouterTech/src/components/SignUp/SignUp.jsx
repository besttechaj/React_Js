import React from 'react';
import './SignUp.css';
const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form action='submit-form.php' method='post'>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' required />

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' required />

        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' required />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
