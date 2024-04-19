import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class componentName extends Component {
  render() {
    console.log('rendering Navbar component');

    return (
      <>
        <nav className='navbar navbar-expand-sm bg-body-tertiary navbar-dark bg-dark'>
          <div className='container-fluid'>
            <Link className='navbar-brand' to='/general'>
              News Web App
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link
                    className='nav-Link active'
                    aria-current='page'
                    to='/about'
                  >
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
