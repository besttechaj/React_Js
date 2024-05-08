import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Read.css';
import axios from 'axios';
export default function Read() {
  let navigate1 = useNavigate();
  let navigate2 = useNavigate();

  let [details, setDetails] = useState({});

  //! Using the dynamic routing (eg id), we are redirected to the update component. Now to fetch the data for the particular user we have to first target the url's endpoint id and using id we can fetch the data from axios.get(): to get the the user's details. Hence to get the endpoint we have a method inside 'react-router-dom package' known as "useParams". This method will not take any argument. The return type of useParam hook is an object.
  //! destructuring object to get the required id
  let { id } = useParams();
  console.log(id);

  //! Since we have fetched the id from the endpoint using "useParam" method. Now we want to fetch the user's details based on id after the component's get mounted. Hence we have one hook that is "useEffect" which will run only once after the component get mounted. So now we can make axios.get() call inside it to fetch the user's details using it's id that we have already fetched from url.
  useEffect(
    () => {
      axios.get(`http://localhost:3000/Users/${id}`).then(
        (d) => {
          console.log(d);
          setDetails(d.data);
        },
        (e) => console.log(e)
      );
    },
    //! empty dependency list otherwise it will go to infinite loop if state changes
    []
  );
  return (
    <div>
      <h2>User Details:</h2>
      <h3>Employee Service Number: {details.id}</h3>
      <h3>Employee Name: {details.name}</h3>
      <h3>Employee Mobile No.: {details.phone}</h3>
      <h3>Employee Email: {details.email}</h3>
      <h3>Employee Password: {details.password}</h3>
      <div>
        {/* //! We are using button tag that's why we are unable to use "link" component to re-direct the user to different path whenever someone click on the button, So to perform such type of functionality for any button or react's element, we have one method "useNavigate" present inside the 'react-router-dom' package. */}
        <button onClick={() => navigate1(`/update/${id}`)}>Update</button>
        <button onClick={() => navigate2(`/userlist`)}>Go Back</button>
      </div>
    </div>
  );
}
