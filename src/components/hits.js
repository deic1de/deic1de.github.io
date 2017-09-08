import React, { Component } from 'react';
import ImageGallery from './imagegallery';
import './hits.css';

class Hits extends Component {
  render() {
    return (
        <div className='hits'>
          <h2>The Latest Hits</h2>
          <p>Sample text</p>
          <div className='genres'>
              <div>
                <p>All</p>
              </div>
              <div>
                <p>House</p>
              </div>
              <div>
                <p>Tropical</p>
              </div>
              <div>
                <p>DeepHouse</p>
              </div>
              <div>
                <p>ClubMix</p>
              </div>
          </div>
          <ImageGallery />
        </div>
      );
  }
}

export default Hits;
