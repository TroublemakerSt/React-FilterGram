import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Settings from './components/Settings';

class App extends Component {
	state = {
      image: 'http://imgproc.airliners.net/photos/airliners/1/0/9/4109901.jpg?v=v4e308924e0e',
      selectedFilter: '',
      settings: {
          contrast: 100,
          hue: 0,
          brightness: 100,
          saturate: 100,
          sepia: 0
      }
  	}

		handleChange = event => {
      const setting = event.target.id;
      const value = event.target.value;
      const settings = { ...this.state.settings, [setting]: value };

      this.setState({ selectedFilter: '', settings });
	  }


  render() {
		const { image, selectedFilter, settings } = this.state;
    return (
      <div className="app">
				<Header title="React FilterGram" />

				<section className="content">
					<Settings settings={settings} handleChange={this.handleChange} />

					<main className="main">

					</main>
				</section>
      </div>
    );
  }
}

export default App;
