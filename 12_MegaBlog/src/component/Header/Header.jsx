import { Container, LogoutBtn } from '../index.js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Header.css';
const Header = () => {
  const authStatus = useSelector((state) => {
    console.log(state);
    console.log(state.authSlice.status);
    return state.authSlice.status;
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
          <div className='cont1'>This is a logo</div>
          <div className='cont2'>
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
