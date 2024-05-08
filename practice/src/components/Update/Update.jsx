import React, { useEffect, useState } from 'react';
import './Update.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export default function Update() {
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

    //! After submitting the form we want to send the updated data to the data base for a particular user, hence we have a method inside axios that is axios.put/patch(). put/patch() will take 3 parameters which are "url" and "data" (Please Note while sending the data to the database, the identifier should have the same that you have in database) and config (for custom configurations like authorization, content-type, data format ant many more). axios.put/patch() will return one promise hence we have to handle it.

    axios.put(`http://localhost:3000/Users/${id}`, user_info).then(
      (d) => {
        // console.log(d);
      },
      (e) => console.log(e)
    );

    //! Empty the field after form submission
    setUser_Info({
      name: '',
      email: '',
      phone: '',
      password: '',
    });

    //! After submitting the form we want to go back again to the user data to re-verify whether the data has been updated or not.
    navigate2('/userlist');
  }

  //! Using the dynamic routing (eg id), we are redirected to the update component. Now to fetch the data for the particular user we have to first target the url's endpoint id and using id we can fetch the data from axios.get(): to get the the user's details. Hence to get the endpoint we have a method inside 'react-router-dom package' known as "useParams". This method will not take any argument. The return type of useParam hook is an object.
  //! destructuring object to get the required id
  let { id } = useParams();
  // console.log(id);

  //! Since we have fetched the id from the endpoint using "useParam" method. Now we want to fetch the user's details based on id after the component's get mounted. Hence we have one hook that is "useEffect" which will run only once after the component get mounted. So now we can make axios.get() call inside it to fetch the user's details using it's id that we have already fetched from url.
  useEffect(
    () => {
      axios.get(`http://localhost:3000/Users/${id}`).then(
        (d) => {
          // console.log(d);
          setUser_Info(d.data);
        },
        (e) => console.log(e)
      );
    },
    //! empty dependency list otherwise it will go to infinite loop if state changes
    []
  );

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
        <button type='submit'>Update Note</button>
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
        {/* //! We are using button tag that's why we are unable to use "link" component to re-direct the user to different path whenever someone click on the button, So to perform such type of functionality for any button or react's element, we have one method "useNavigate" present inside the 'react-router-dom' package. */}
        <button onClick={() => navigate('/userlist')}>Go back</button>
      </form>
    </div>
  );
}
