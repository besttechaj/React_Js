import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import auth_service from './appwriteServices/Auth_Service';
import { login, logout } from './Store/authSlice.js';
import { Header, Footer } from './component/index.js';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const authStatus = useSelector((state) => {
    console.log(state.authSlice.status);
    return state.authSlice.status;
  });

  // useEffect(() => {
  //   console.log('App component');

  //   authStatus
  //     ? auth_service.getCurrentUser().then(
  //         (userData) => {
  //           if (userData) {
  //             console.log('fetching the current user: ', userData);
  //             dispatch(login({ userData }));
  //             setLoading(false);
  //           }
  //         },
  //         (err) => console.log('No user data is present due to', err)
  //       )
  //     : console.log('No current user exist hence logging out');
  //   dispatch(logout());
  //   setLoading(false);

  // checking the current user
  // }, []);

  useEffect(() => {
    console.log('App component');
    // checking the current user
    auth_service
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          console.log('fetching the current user: ', userData);
          dispatch(login({ userData }));
        } else {
          console.log('No current user exist hence logging out');
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  // if loading is false then display condition1: else condition 2
  return !loading ? (
    <>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      {/* //todo */}
    </>
  ) : null;
};

export default App;
