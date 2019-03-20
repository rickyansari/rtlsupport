import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DirectionProvider, {
  DIRECTIONS
} from "react-with-direction/dist/DirectionProvider";

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { withStyles, css } from 'react-with-styles';


ThemedStyleSheet.registerInterface(aphroditeInterface);

class App extends Component {
  render() {
    return (
      <DirectionProvider direction={DIRECTIONS.RTL}>
        <div className="app">
          <TestHeader />
          <TestHeader />
          <TestHeader />
        </div>
      </DirectionProvider>
    );
  }
}

function TestHeader({ css }) {
  return (
    <div>
      <header className="appHeader">
        <img src={logo} className="appLogo" alt="logo" />
        <p>
          TestHeaderChild Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="appLink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TestHeaderChild />
    </div>
  );
}

class TestHeaderChild extends Component {
  render() {
    return (
      <div>
        <header className="appHeader">
          <img src={logo} className="appLogo" alt="logo" />
          <p>
            TestHeaderChild Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="appLink"
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
}

export default withStyles(() => ({
  app: { "textAlign": "center", "flexDirection": "row" },
  appHeader: {
    "backgroundColor": "#282c34", "flexDirection": "row", "minHeight": "100px", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "calc(10px + 2px)", "color": "white"
  },
  appLogo: {
    "animation": "appLogoSpin infinite 20s linear", "height": "40px", "pointerEvents": "none"
  },
  appLink: { "color": "#61dafb", "marginLeft": "200px" },
  appLogoSpin: { "from": { "transform": "rotate(0deg)" }, "to": { "transform": "rotate(-360deg)" } }

}))(App);

