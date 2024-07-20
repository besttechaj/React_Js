//! It is a mechanism to protect the pages and routes
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  const authStatus = useSelector((state) => {
    console.log(state);
    return state.authSlice.status;
  });

  useEffect(() => {
    console.log('useEffect AuthLayout: ', children, authStatus, authentication);
    //todo: make it more easy
    // if (authStatus === true) {
    //   navigate('/');
    // } else if (authStatus === false) {
    //   navigate('/login');
    // }
    //* byDefault_true && false !== true (true):  true && true
    if (authentication && authStatus !== authentication) {
      navigate('/login');
      //* false && true !== true (false): false  && false
    } else if (!authentication && authStatus !== authentication) {
      navigate('');
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);
  return loader ? <h1>LOADING...</h1> : <>{children}</>;
}

export default Protected;
