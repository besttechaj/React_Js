import './Header.css';
import { Link, NavLink } from 'react-router-dom';
function Header() {
  return (
    <>
      <nav className='nav_outer'>
        <div className='nav_inner'>
          <div id='nav_inner1'>
            <Link id='app_name'>reactRouterTech</Link>
          </div>

          <div id='nav_inner2'>
            <ul className=''>
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
            </ul>
          </div>
          <div className='nav_inner3'>
            <button>
              <NavLink className='nav-a' to='/login'>
                LogIn
              </NavLink>
            </button>
            <button>
              <NavLink className='nav-a' to='/signup'>
                SignUp
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
