import React, { Component } from 'react';
import logo from './logo.svg';
import Detector from "./component/Detector"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Detector />
      </div>
    );
  }
}

export default App;
