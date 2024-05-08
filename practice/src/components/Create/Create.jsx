import React, { useState } from 'react';
import './Create.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Create() {
  let navigate = useNavigate();
  let navigate2 = useNavigate();

  const [user_info, setUser_Info] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser_Info({
      ...user_info,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user_info);

    //!  After submitting the form we want to send the newly created data to the database, hence we have a method inside axios that is axios.post(). post() will take 3 parameters which are "url" and "data" (Please Note while sending the data to the database, the identifier should have the same that you have in database) and config (for custom configurations like authorization, content-type, data format ant many more). axios.post() will return one promise hence we have to handle it.

    axios.post(`http://localhost:3000/Users`, user_info).then(
      (d) => console.log(d),
      (e) => console.log(e)
    );

    //! Empty the field after form submission
    setUser_Info({
      name: '',
      email: '',
      phone: '',
      password: '',
    });

    navigate2('/userlist');
  }

  return (
    <div className='outer'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter you name'
          id='name'
          name='name'
          value={user_info.name}
          onChange={handleChange}
        />
        <input
          type='number'
          placeholder='Enter your mobile number'
          id='phone'
          name='phone'
          value={user_info.phone}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Enter your email'
          id='email'
          name='email'
          value={user_info.email}
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Enter your password'
          id='password'
          name='password'
          value={user_info.password}
          onChange={handleChange}
        />
        <button type='submit'>Add Note</button>
        <button
          type='reset'
          onClick={() =>
            setUser_Info({
              name: '',
              email: '',
              phone: '',
              password: '',
            })
          }
        >
          Clear
        </button>
        <button onClick={() => navigate('/')}>Go back to Home</button>
      </form>
    </div>
  );
}
