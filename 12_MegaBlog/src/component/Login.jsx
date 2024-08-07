import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../Store/authSlice';
import { Button, Input } from './index';
import { useDispatch } from 'react-redux';
import auth_service from '../appwriteServices/Auth_Service';
import { useForm } from 'react-hook-form';
import './css/Login.css';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    console.log('Login comp: ', data);
    // Initially always make the error field empty
    setError('');
    try {
      console.log('running try block');
      const session = await auth_service.login(data);
      console.log(session);
      //* if user is logged-in
      if (session) {
        const userData = await auth_service.getCurrentUser();
        //* updating the store
        if (userData) dispatch(authLogin(userData));
        navigate('/');
      } else {
        console.log('no session found');
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className='login_outer'>
      <div className='login_inner'>
        <h2>Sign in to your account</h2>
        <h1>
          Don't have an account?<Link to='/signup'>SignUp</Link>
        </h1>
        <br />
        <p>{error && <span>{error}</span>}</p>
        <br />
        {/* //* giving our own method to handle submit, handleSubmit is an event  */}
        <form onSubmit={handleSubmit(login)}>
          <div>
            <div>
              <Input
                label='Email: '
                placeholder='Enter your email'
                type='email'
                //* refer create-react-form docs for below syntax
                {...register(
                  //* accept key and value pair
                  'email',
                  //* options
                  {
                    required: true,
                    validate: {
                      matchPattern: (value) =>
                        //*  /patternMatchFromRegex/.test(v) || if-not-matched--> 'msg'
                        /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/.test(
                          value
                        ) || 'Email address must be a valid email address',
                    },
                  }
                )}
              />
              <Input
                label='Password: '
                type='password'
                placeholder='Enter your password'
                {...register('password', {
                  required: true,
                })}
              />
              <Button type='submit' className='signup_btn'>
                Sign in
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
