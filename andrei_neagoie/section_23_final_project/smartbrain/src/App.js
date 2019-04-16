import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
