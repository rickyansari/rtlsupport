import React, { Component } from "react";
import "./App.css";
import DirectionProvider, {
  DIRECTIONS
} from "react-with-direction/dist/DirectionProvider";

import TestHeaderChild from "./TestHeaderChild";

export default class App extends Component {
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

function TestHeader() {
  return (
    <div>
      <TestHeaderChild />
      <TestHeaderChild />
    </div>
  );
}
