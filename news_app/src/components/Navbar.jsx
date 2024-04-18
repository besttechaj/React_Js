import React, { Component } from 'react';

export default class componentName extends Component {
  render() {
    console.log('rendering Navbar component');
    return (
      <>
        <nav className='navbar navbar-expand-sm bg-body-tertiary navbar-dark bg-dark'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='/'>
              News Web App
            </a>
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
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='/about'
                  >
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/categories'>
                    Categories
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/categories'>
                    Categories
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/business'>
                    business
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/entertainment'>
                    entertainment
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/general'>
                    general
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/health'>
                    health
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/science'>
                    science
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/sports'>
                    sports
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/technology'>
                    technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
