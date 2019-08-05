import React from 'react';
// import logo from './logo.svg';
import logoCM from './logoCM.png';
import SideBar from './SideBar';

import './App.css';


function App() {
  return (
    <div className="App">
      <SideBar />
      <header className="App-header">
        <img src={logoCM} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Text</h1>
        <h1>Text</h1>
        <h1>Text</h1>
      </header>
    </div>
  );
}

export default App;
