import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import imageLogo from './hesus.js';
import './reset.scss'
import './index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="app">
        <header className="header">
        <img src={imageLogo}/>
        </header>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
