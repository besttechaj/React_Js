import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../Store/authSlice';
import { Button, Input } from './index';
import { useDispatch } from 'react-redux';
import auth_service from '../appwriteServices/Auth_Service';
import { useForm } from 'react-hook-form';
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    console.log('Signup comp: ', data);
    // Initially always make the error field empty
    setError('');
    try {
      const userData = await auth_service.createAccount(data);
      //* if user is logged-in
      if (userData) {
        const userData = await auth_service.getCurrentUser();
        //* updating the store
        if (userData) dispatch(login(userData));
        navigate('/');
      } else {
        console.log('no userData found');
      }
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div>
      <div>
        <h2>SignUp to create a new Account</h2>
        <h1>
          Have an account?<Link to='/login'>Login</Link>
        </h1>
        <br />
        <p>{error && <span>{error}</span>}</p>
        <br />
        {/* //* handle submit is an event */}
        <form onSubmit={handleSubmit(create)}>
          <Input
            label='Full Name: '
            placeholder='Enter your full name'
            {...register('name', {
              required: true,
            })}
          />
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
          <Button type='submit'>Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
