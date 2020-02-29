import React, {useState} from 'react';

import {makeStyles} from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import logo from '../logo.svg';
import '../App.css';

function App() {
  
  enum panels { background, portfolio, contact }
  
  const openPanel = useState(panels.background);
  
  return (
    <div className="App">
      
      {/* Header */}
      {/* <TopNav /> */}
      
      {/* Body */}
      <div id="AppContainer">
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
          >
            Background
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
  
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
          >
            Portfolio Projects
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
  
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
          >
            Contact
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          
          </ExpansionPanelDetails>
        </ExpansionPanel>
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
