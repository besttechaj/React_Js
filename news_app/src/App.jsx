import React, { Component } from 'react';
import News from './components/News';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';

export default class App extends Component {
  router = createBrowserRouter([
    {
      path: '/general',
      element: <News category='general' pageSize={15} country='in' />,
    },
    {
      path: '/science',
      element: <News category='science' pageSize={15} country='in' />,
    },
    {
      path: '/technology',
      element: <News category='technology' pageSize={15} country='in' />,
    },
    {
      path: '/sports',
      element: <News category='sports' pageSize={15} country='in' />,
    },
    {
      path: '/entertainment',
      element: <News category='entertainment' pageSize={15} country='in' />,
    },
    {
      path: '/business',
      element: <News category='business' pageSize={15} country='in' />,
    },
    {
      path: '/health',
      element: <News category='health' pageSize={15} country='in' />,
    },
  ]);
  render() {
    return (
      <>
        <Navbar />
        <RouterProvider router={this.router} />
      </>
    );
  }
}
