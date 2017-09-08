import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
        <div id='header'>
          <div className='top-header'>
            <div className='title'>
              <p>Ghost Production</p>
            </div>
            <nav>
              <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Features</a></li>
                <li><a href='#'>Login</a></li>
              </ul>
            </nav>
            <div id='ghost'>
              <p>Ghost Production</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;
