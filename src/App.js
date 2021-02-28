import React, { useState } from "react";
import "./styles.css";
import Navigation from "./Navigation.js";
import Font from "./Font.js";

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

  return (
    <div className="App">
      <h1 className="app--header">CSS Generator</h1>
      <Navigation navItems={navItems} setNavItems={setNavItems} />
      <Font
        displayState={navItems.Font}
        styleState={styleState}
        setStyleState={setStyleState}
      />
    </div>
  );
}
