import React, { useState } from "react";
import "./styles.css";
import CustomizeStyle from "./CustomizeStyle.js";
import Navigation from "./Navigation.js";

export default function App() {
  const [navItems, setNavItems] = useState({
    Font: true,
    Button: false
  });

  const [styleState, setStyleState] = useState({
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

  const generateStyle = (styleState) => ({
    fontSize: `${styleState.fontSize}px`,
    fontFamily: styleState.fontFamily,
    backgroundColor: styleState.backgroundColor,
    color: styleState.color,
    fontWeight: styleState.fontWeight,
    fontStyle: styleState.fontStyle,
    lineHeight: `${styleState.lineHeight}em`,
    textAlign: styleState.textAlign,
    padding: `${styleState.padding}em`
  });

  return (
    <div className="App">
      <h1 className="app--header">CSS Generator</h1>
      <Navigation navItems={navItems} setNavItems={setNavItems} />
      <div style={{ display: !navItems.Font ? "none" : "initial" }}>
        hello - font here
      </div>
      <div style={{ display: !navItems.Button ? "none" : "initial" }}>
        hello - button here
      </div>
      <div className="display-text">
        <p className="display-text__body" style={generateStyle(styleState)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
          <code>
            <div style={{ display: "none" }}>
              {Object.keys(styleState).map((property) => (
                <p key={property}>
                  {property} : {styleState[property]}
                </p>
              ))}
            </div>
          </code>
          <button>Copy &lt;/&gt; </button>
        </div>
      </div>
      <CustomizeStyle styleState={styleState} setStyleState={setStyleState} />
    </div>
  );
}
