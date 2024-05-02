import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from './Layout.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/ContactUs/Contact.jsx';
import LogIn from './components/LogIn/LogIn.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import User from './components/User/User.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';

// //! way 1: defining routes : performing nested routing
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     //! we are passing some components inside our layout as children so that we can dynamically display the component without passing component one to another.
//     children: [
//       {
//         path: '/about',
//         element: <About />,
//       },
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//       {
//         path: '/login',
//         element: <LogIn />,
//       },
//       {
//         path: '/signup',
//         element: <SignUp />,
//       },
//     ],
//   },
// ]);

//! way 2 : defining routes : performing nested routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/about' element={<About />} />
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />

      {/* fetching the path_id using params */}
      <Route path='user/:id' element={<User />} />
      <Route
        path='github'
        //! "loader: property" helps you to dynamically fetch the data through the api. Whenever you hit the link your loader will fetch the data from the api and store it inside cached memory and all this process will execute before useEffect() run or A loader in react-router is a function that is used to fetch data for a route before it is rendered
        loader={githubInfoLoader}
        element={<Github />}
      />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
