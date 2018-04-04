import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
    return (
      <div className="App">
			<HelloWorld name="World"/>
			<HelloWorld name="Jaska"/>
			<HelloWorld name="Erno"/>
			<HelloWorld name="Jussi"/>
      </div>
    
	);
  }
}

export default App;
