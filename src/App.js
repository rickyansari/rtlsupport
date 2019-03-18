import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DirectionProvider, {
  DIRECTIONS
} from "react-with-direction/dist/DirectionProvider";

class App extends Component {
  render() {
    return (
      <DirectionProvider direction={DIRECTIONS.RTL}>
        <div className="App">
          <TestHeader />
          <TestHeader />
          <TestHeader />
        </div>
      </DirectionProvider>
    );
  }
}

class TestHeader extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        </header>
      </div>
    );
  }
}

export default App;
