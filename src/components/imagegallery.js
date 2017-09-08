import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from './image';

function ImageGallery(){
  return(
    <div className='Gallery__container'>
      <Image name='images/kong.jpg' />
      <Image name='images/bird.jpg' />
      <Image name='images/lake.jpg' />
      <Image name='images/llueve.jpg' />
      <Image name='images/soldiers.jpg' />
      <Image name='images/ballz.jpg' />
      <Image name='images/dude.jpg' />
      <Image name='images/fish.jpg' />
    </div>
  );
}

export default ImageGallery;
