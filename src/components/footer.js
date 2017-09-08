import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './footer.css';

class Footer extends Component {
  render() {
    return (
        <div id='footer'>
          <img src='images/footer.png' />
          <div id='footer-container'>
            <div>
              <h3>Ghost Production</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div id='subscribe'>
              <h4>Subscribe</h4>
              <input>
              </input>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div id='explore'>
              <h4>Explore</h4>
                <div>
                  <p>Envato</p>
                  <p>Themecurve</p>
                  <p>CreativeShowcase</p>
                  <p>Freebiscurve</p>
                </div>
                <div>
                  <p>Themeforest</p>
                  <p>Microsoft</p>
                  <p>Google</p>
                  <p>Yahoo</p>
                  </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Footer;
