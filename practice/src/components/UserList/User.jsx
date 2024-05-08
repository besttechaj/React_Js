import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './User.css';
export default function User() {
  let navigate = useNavigate();
  const [information, setInformation] = useState([]);

  //! fetch the data from the json-server (to perform crud operations inside .json file) after the component gets mounted on the UI using useEffect hook because it will execute only once.
  useEffect(() => {
    //! axios.get(): to fetch the data from the url. axios.get() will take one parameter that is url. Axios will return Promise object.
    axios.get(`http://localhost:3000/Users`).then(
      (d) => {
        // console.log(d);
        setInformation(d.data);
      },
      (e) => console.log(e)
    );
  }, []);

  // console.log(information);

  //! destructuring data fetched from the useEffect

  return (
    <div className='outer'>
      <div className='inner1'>
        <h3>User data list</h3>
        <table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </tbody>

          {information.map((v) => {
            let { id, name, phone, email, password } = v;
            return (
              <React.Fragment key={id}>
                <tbody>
                  <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>
                      <Link to={`/update/${id}`}>UPDATE</Link>
                      <Link to={`/read/${id}`}>READ</Link>
                      <Link>DELETE</Link>
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            );
          })}
        </table>
      </div>
      <div className='inner2'>
        <button onClick={() => navigate('/create')}>Add a new User</button>
      </div>
    </div>
  );
}
