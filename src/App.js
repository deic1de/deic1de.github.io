import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import Header from './components/header';
import Features from './components/features';
import Hits from './components/hits';
import JoinUs from './components/joinus';
import Support from './components/support';
import Footer from './components/footer';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Features />
        <Hits />
        <JoinUs />
        <Support />
        <Footer />
      </div>
    );
  }
}

export default App;
