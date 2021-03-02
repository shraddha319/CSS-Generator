import React, { useState } from "react";
import "./styles.css";
import Navigation from "./Navigation.js";
import Font from "./Font/Font.js";
import Button from "./Button/Button.js";

export default function App() {
  const [navItems, setNavItems] = useState({
    Font: true,
    Button: false
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

  return (
    <div className="App">
      <h1 className="app--header">CSS Generator</h1>
      <Navigation navItems={navItems} setNavItems={setNavItems} />
      <Font
        displayState={navItems.Font}
        styleState={fontStyleState}
        setStyleState={setFontStyleState}
      />
      <Button
        displayState={navItems.Button}
        buttonStyle={buttonStyle}
        setButtonStyle={setButtonStyle}
      />
    </div>
  );
}
