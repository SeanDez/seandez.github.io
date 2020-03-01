import React, {useState} from 'react';

import TopNav from "./TopNav";

import logo from '../logo.svg';
import '../App.css';

function App() {
  
  enum panels { background, portfolio, contact }
  
  const openPanel = useState(panels.background);
  
  return (
    <div className="App" id="appContainer">
      
      {/* Header */}
       <TopNav />
      
      {/* Body */}
      <div id="bodyContainer">
      
      </div>
      
      
      {/* Footer */}
      {/* BottomNav */}
      
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
