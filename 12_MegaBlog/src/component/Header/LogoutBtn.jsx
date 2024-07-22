import React from 'react';
import { useDispatch } from 'react-redux';
import auth_service from '../../appwriteServices/Auth_Service';
import { logout } from '../../Store/authSlice';
const LogoutBtn = () => {
  console.log('logout component');
  const dispatch = useDispatch();

  const logoutHandler = () => {
    auth_service
      .logout()
      .then(() => {
        // updating the store
        dispatch(logout());
      })
      .catch((err) => console.log(err));
  };
  console.log('logout component');
  return <button onClick={logoutHandler}>LOGOUT</button>;
};

export default LogoutBtn;
