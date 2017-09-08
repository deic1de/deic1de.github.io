import React, { Component } from 'react';
import Logo from './logo';
import './features.css';

class Features extends Component {
  render() {
    return (
        <div className='features-container'>
          <h2>FEATURES</h2>
          <div className='column'>
            <div className='column-container'>
              <div className='column'>
                <div className='logo'>
                  <img src='images/feather.png' />
                </div>
                <div className='tracks'>
                  <h3>Sell your tracks</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
              <div className='column'>
                <div className='logo'>
                  <img src='images/pencil.png' />
                </div>
                <div className='tracks'>
                  <h3>Buy fresh tracks from others</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
              <div className='column'>
                <div className='logo'>
                  <img src='images/megaphone.png' />
                </div>
                <div className='tracks'>
                  <h3>Free support</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default Features;
