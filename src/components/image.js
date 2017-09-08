import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './image.css';


function Image(props) {
  return <img className='Gallery' src={props.name} />;
}

export default Image;
