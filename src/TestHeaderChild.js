import React, { Component } from "react";
import logo from "./logo.svg";
import { css, StyleSheet } from "aphrodite";

export default class TestHeaderChild extends Component {
  render() {
    return (
      <div>
        <header className={css(styles.appHeader)}>
          <img src={logo} className={css(styles.appLogo)} alt="logo" />
          <p>
            TestHeaderChild Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={css(styles.appLink)}
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

const translateKeyframes = {
  "0%": {
    transform: "translateX(0)"
  },

  "50%": {
    transform: "translateX(100px)"
  },

  "100%": {
    transform: "translateX(0)"
  }
};

const opacityKeyframes = {
  from: {
    opacity: 0
  },

  to: {
    opacity: 1
  }
};

const styles = StyleSheet.create({
  app: { textAlign: "center", flexDirection: "row" },
  appHeader: {
    backgroundColor: "#282c34",
    flexDirection: "row",
    minHeight: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 20px)",
    color: "white"
  },
  appLogo: {
    animationName: [translateKeyframes, opacityKeyframes],
    animationDuration: "3s, 1200ms",
    animationIterationCount: "infinite",
    height: "400px",
    pointerEvents: "none"
  },
  appLink: { color: "#61dafb", marginLeft: "200px", fontSize: "30px" },
  appLogoSpin: {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(-360deg)" }
  }
});
