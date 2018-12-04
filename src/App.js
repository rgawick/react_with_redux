import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dog from './components/Dog'
import DogAdded from './components/DogAdded'

class App extends Component {
  render() {
    return (
      <div class="content">
      <Dog />
      <DogAdded />
      </div>
    )
  }
}

export default App;
