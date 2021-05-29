import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => (
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Dad jokes- react</h1>
    </header>
  </div>
);

render(<App />, document.querySelector('#app'));
