import React, { useState } from "react";
import "./styles.css";
import Navigation from "./Navigation.js";
import Font from "./Font.js";

export default function App() {
  const [navItems, setNavItems] = useState({
    Font: false,
    Button: true
  });

  const [fontStyleState, setFontStyleState] = useState({
    fontSize: 16,
    fontFamily: "Helvetica, sans-serif",
    backgroundColor: "#fff",
    color: "#000",
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 1.5,
    textAlign: "left",
    padding: 1
  });

  const [buttonStyle, setButtonStyle] = useState({
    outline: "none",
    fontSize: 16,
    fontFamily: "Helvetica, sans-serif",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 1,
    padding: 0.5,
    cursor: "pointer"
  });

  const generateStyle = (styleState) => ({
    outline: styleState.outline,
    fontSize: `${styleState.fontSize}px`,
    fontFamily: styleState.fontFamily,
    backgroundColor: styleState.backgroundColor,
    color: styleState.color,
    borderRadius: `${styleState.borderRadius}em`,
    padding: `${styleState.padding}em`,
    cursor: styleState.cursor
  });

  function setStylePorperty(type) {
    setButtonStyle({ ...buttonStyle, [type]: event.target.value });
  }

  return (
    <div className="App">
      <h1 className="app--header">CSS Generator</h1>
      <Navigation navItems={navItems} setNavItems={setNavItems} />
      <Font
        displayState={navItems.Font}
        styleState={fontStyleState}
        setStyleState={setFontStyleState}
      />
      <div className="customize-button" style={{ display: navItems.Button }}>
        <button style={generateStyle(buttonStyle)}>Click!</button>
        <div className="customize-style--color">
          <div>
            <label> Background </label>
            <input
              type="color"
              onChange={() => setStylePorperty("background")}
            />
            <label> Color </label>
            <input type="color" onChange={() => setStylePorperty("color")} />
          </div>
        </div>
        <div className="customize-style--font-size">
          <label>Font size: {buttonStyle.fontSize}</label>
          <input
            type="range"
            min="8"
            max="80"
            step="4"
            onChange={() => setStylePorperty("fontSize")}
          />
        </div>
        <div className="customize-style--border">
          <div className="customize-style--border-radius">
            <label> Border radius </label>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              onChange={() => setStylePorperty("borderRadius")}
            />
          </div>
        </div>
        <div className="customize-style--padding">
          <label> Padding </label>
          <input
            type="range"
            min="0.1"
            max="5"
            step="0.1"
            onChange={() => setStylePorperty("padding")}
          />
        </div>
      </div>
    </div>
  );
}
