import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function User() {
  const [information, setInformation] = useState([]);

  //! fetch the data from the json-server (to perform crud operations inside .json file) after the component gets mounted on the UI using useEffect hook because it will execute only once.
  useEffect(() => {
    //! axios.get(): to fetch the data from the url. axios.get() will take one parameter that is url. Axios will return Promise object.
    axios.get(`http://localhost:3000/Users`).then(
      (d) => {
        console.log(d);
        setInformation(d.data);
      },
      (e) => console.log(e)
    );
  }, []);

  console.log(information);

  //! destructuring data fetched from the useEffect

  return (
    <div className='outer'>
      <div className='inner'>
        <h1>User data</h1>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          {information.map((v) => {
            let { id, name, phone, email, password } = v;
            return (
              <>
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                </tr>
                <div>
                  <Link to={`/update/${id}`}>UPDATE</Link>
                  <Link to={`/read/${id}`}>READ</Link>
                  <Link>DELETE</Link>
                </div>
              </>
            );
          })}
        </table>
      </div>
      <div className='inner2'>
        <button>Add a new User</button>
      </div>
    </div>
  );
}
