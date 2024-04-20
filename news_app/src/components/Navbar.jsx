import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class componentName extends Component {
  render() {
    console.log('rendering Navbar component');

    return (
      <>
        <nav className='nav_outer'>
          <div className='nav_inner'>
            <div id='nav_inner1'>
              <Link id='app_name' to='/general'>
                News Web App
              </Link>
            </div>

            <div id='nav_inner2'>
              <ul className=''>
                <li className='nav-item'>
                  <Link className='nav-Link' aria-current='page' to='/about'>
                    About
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-Link' to='/business'>
                    Business
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-Link' to='/entertainment'>
                    Entertainment
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-Link' to='/general'>
                    General
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-Link' to='/health'>
                    Health
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-Link' to='/science'>
                    Science
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-Link' to='/sports'>
                    Sports
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-Link' to='/technology'>
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
