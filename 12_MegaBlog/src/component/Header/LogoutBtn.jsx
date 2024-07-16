import React from 'react';
import { useDispatch } from 'react-redux';
import auth_service from '../../appwriteServices/Auth_Service';
import { logout } from '../../Store/authSlice';
const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    auth_service
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => console.log(err));
  };
  console.log('logout component');
  console.log(auth_service);
  console.log(logout);
  return <button>LOGOUT</button>;
};

export default LogoutBtn;
