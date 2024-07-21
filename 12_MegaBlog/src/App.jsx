import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import auth_service from './appwriteServices/Auth_Service';
import { login, logout } from './Store/authSlice.js';
import { Header, Footer } from './component/index.js';
import { Outlet } from 'react-router-dom';
import './App.css';
const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    auth_service
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          console.log('logging out');
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <>
      <h1>logged in</h1>
      <div>
        <Header />
        <Footer />
      </div>
      {/* //todo */}
      <main>
        <Outlet />
      </main>
    </>
  ) : null;
};

export default App;
