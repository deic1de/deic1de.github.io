import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from './image';
import {Button} from 'react-bootstrap';
import './joinus.css';

class JoinUs extends Component {
  render() {
    return (
        <div className='join' id='background'>
          <h2>Join Us!</h2>
          <p>Sample text</p>
          <div className='btncnt'>
            <Button bsStyle="custom" bsSize="large">CREATE ACCOUNT</Button>
          </div>
          <h3>Still have questions? We have an information for you</h3>
          <div className='info'>
            <Image name='images/for_authors.jpg' />
            <Image name='images/for_buyers.jpg' />
          </div>
          <div className='info__for'>
            <h4>For authors</h4>
            <h4>For buyers</h4>
          </div>
        </div>
      );
  }
}

export default JoinUs;
