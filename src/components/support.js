import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './support.css';

class Support extends Component {
  render() {
    return (
        <div className='support'>
          <h2>Support 24/7</h2>
          <p>Sample text</p>
          <div id='contact'>
            <h4>Sample text</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id='form'>
            <h4>Have some questions?</h4>
            <Form inline>
              <FormGroup controlId="formInlineName">
                {' '}
                <FormControl type="text" placeholder="Name" />
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineEmail">
                {' '}
                <FormControl type="email" placeholder="E-Mail" />
              </FormGroup>
              {' '}
            </Form>
            <FormGroup>
              <FormControl type="text" placeholder="Message" />
            </FormGroup>
            <Button type="submit">
              <img src='images/message.png' />
              Send Message
            </Button>
          </div>
          <div id='map'>
          </div>
        </div>
      );
  }
}

export default Support;
