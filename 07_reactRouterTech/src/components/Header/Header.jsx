import './Header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
function Header() {
  //! Using useNavigate() hook because we can easily provide routing path for navbar items using "NavLink or Link" but for buttons, we can't use "Link or NavLink" hence  it is difficult to provide the routing path so we have a hook known as "useNavigate hook" which is used in such circumstances.
  let navigate = useNavigate();
  return (
    <>
      <nav className='nav_outer'>
        <div className='nav_inner'>
          <div id='nav_inner1'>
            <Link id='app_name'>reactRouterTech</Link>
          </div>

          <div id='nav_inner2'>
            <ul>
              <li className='nav-item'>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-a' to='/about'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-a' to='/contact'>
                  Contact
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-a' to='/github'>
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='nav_inner3'>
            <button
              onClick={() => {
                navigate('/login');
              }}
            >
              LogIn
            </button>
            <button onClick={() => navigate('/signup')}>SignUp</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
