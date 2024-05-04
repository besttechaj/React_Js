import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Profile() {
  //! fetching the data from the global context using "useContext() route" and destructuring the inside data
  let { user } = useContext(UserContext);
  return (
    <div style={{ border: '2px solid black', padding: '0.3rem' }}>
      <h1>Profile component</h1>
      <br />
      <h2>
        {`You have Successfully logged in your Account, using username : ${user.id}
           and password : ${user.pwd}`}
      </h2>
      <h2></h2>
    </div>
  );
}
