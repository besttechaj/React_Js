import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/ContactUs/Contact.jsx';
import LogIn from './components/LogIn/LogIn.jsx';
import SignUp from './components/SignUp/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    //! we are passing some components inside our layout as children so that we can dynamically display the component without passing component one to another.
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <LogIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
