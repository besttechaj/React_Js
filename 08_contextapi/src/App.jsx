import React from 'react';
import { UserContextProvider } from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';
export default function App() {
  return (
    <>
      <h1>Introduction to context Api</h1>
      <UserContextProvider>
        <Login />
        <br />
        <br />
        <Profile />
      </UserContextProvider>
    </>
  );
}
