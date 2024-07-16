import React from 'react';
import { Container, LogoutBtn } from '../index.js';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const authStatus = useSelector((state) => {
    console.log(state);
    // console.log(state.auth.status);
    return state.auth.status;
  });

  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },

    {
      name: 'SignUp',
      slug: '/signup',
      active: !authStatus,
    },

    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },

    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ];

  return (
    <header>
      <Container>
        <nav>
          <div>logo</div>
          <div>
            <ul>
              {navItems.map((item, i) =>
                item.active ? (
                  <li key={i}>
                    <button onClick={() => navigate(item.slug)}>
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {/* //* if authenticated then display logout button  */}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
