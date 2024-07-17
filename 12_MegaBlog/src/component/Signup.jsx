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

  const create = async (data) => {};
  return <div></div>;
};

export default SignUp;
