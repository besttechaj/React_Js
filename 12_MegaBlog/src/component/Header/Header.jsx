import { Container, LogoutBtn } from '../index.js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Header.css';
const Header = () => {

//! BUG: UNWANTED REQ ON ADD-POST


  //* fetching the status from store using useSelector in redux
  const authStatus = useSelector((state) => {
    console.log(state.authSlice.status);
    return state.authSlice.status;
  });

  const navigate = useNavigate();

  const navItems = [
    //* Note : Displaying only those items whose active state is "true" ( authStatus )
    // {name: headerName, path:: slug, active:: T or F}

    { name: 'Home', slug: '/', active: true },
    {
      name: 'Login',
      slug: '/login',
      //* there should be no user logged-in
      active: !authStatus,
    },

    {
      name: 'SignUp',
      slug: '/signup',
      //* there should be no user logged-in
      active: !authStatus,
    },

    {
      name: 'All Posts',
      slug: '/all-posts',
      //* user must be logged-in
      active: authStatus,
    },

    {
      name: 'Add Post',
      slug: '/add-post',
      //* user must be logged-in
      active: authStatus,
    },
  ];

  return (
    <header>
      <Container>
        <nav>
          <div className='cont1'>This is a logo</div>
          <div className='cont2'>
            <ul>
              {navItems.map((item) =>
                //* Displaying only those items whose active state is "true" ( authStatus )
                item.active ? (
                  <li key={item.name}>
                    <button onClick={() => navigate(item.slug)}>
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}

              {/* //* if user is authenticated then display logout button  */}
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
