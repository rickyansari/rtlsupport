import React, { Component } from "react";
import logo from "./logo.svg";
// import { css, StyleSheet } from "aphrodite";
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import { withStyles, css } from "react-with-styles";

ThemedStyleSheet.registerInterface(aphroditeInterface);

function TestHeaderChild({ styles }) {
  return (
    <div>
      <header {...css(styles.appHeader)}>
        <img src={logo} {...css(styles.appLogo)} alt="logo" />
        <p>
          TestHeaderChild Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          {...css(styles.appLink)}
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
export default withStyles(() => ({
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
}))(TestHeaderChild);
