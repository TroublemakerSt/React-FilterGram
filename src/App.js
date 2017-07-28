import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
				<Header title="React FilterGram" />
				
				<section className="content">

				</section>
      </div>
    );
  }
}

export default App;
