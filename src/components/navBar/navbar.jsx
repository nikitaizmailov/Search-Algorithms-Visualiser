import React, { Component } from 'react';
import "./nav.css";

// Second way of presenting a component via Class method
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                      <span id="author" className='badge badege-pill badge-secondary'>Nikita Izmailov's</span>
                      <span id='appName' className='badge m-2 badge-primary'>
                          Searching Algorithms Application
                      </span>
                </a>
              </div>
            </nav>
            );
    }
}


export default NavBar;