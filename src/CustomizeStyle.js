import React, { useState } from "react";
import "./styles.css";
import {
  fontWeight,
  fontStyle,
  fontFamily,
  textAlignment
} from "./utility/constants.js";

export default function CustomizeStyle({ styleState, setStyleState }) {
  const increaseFontSize = () =>
    setStyleState({ ...styleState, fontSize: styleState.fontSize + 2 });

  const checkFontSize = (currentSize, maxLimit = 10) =>
    currentSize >= maxLimit + 2;

  const decreaseFontSize = () =>
    setStyleState({
      ...styleState,
      fontSize: checkFontSize(styleState.fontSize)
        ? styleState.fontSize - 2
        : styleState.fontSize
    });

  const setStyleProperty = (type) => {
    setStyleState({ ...styleState, [type]: event.target.value });
  };

  return (
    <div className="customize-style">
      <div className="customize-style__font-size">
        <button onClick={decreaseFontSize}> - </button>
        <span> Font Size {styleState.fontSize} px </span>
        <button onClick={increaseFontSize}> + </button>
      </div>
      <div className="customize-style__font-family">
        <label>Font Family </label>
        <select onChange={() => setStyleProperty("fontFamily")}>
          {fontFamily.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="customize-style__bgcolor-scheme">
        <label>Pick a background color </label>
        <input
          type="color"
          value={styleState.backgroundColor}
          onChange={() => setStyleProperty("backgroundColor")}
        />
      </div>
      <div className="customize-style__color-scheme">
        <label>Pick a font color </label>
        <input
          type="color"
          value={styleState.color}
          onChange={() => setStyleProperty("color")}
        />
      </div>
      <div className="customize-style__text-style">
        <label> Font weight </label>
        <select onChange={() => setStyleProperty("fontWeight")}>
          {fontWeight.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <label> Font Style </label>
        <select onChange={() => setStyleProperty("fontStyle")}>
          {fontStyle.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="customize-style__line-spacing">
        <label>Vertical line Height </label>
        <input
          type="range"
          value={styleState.lineHeight}
          min="1"
          max="10"
          step="0.1"
          onChange={() => setStyleProperty("lineHeight")}
        />
        <label> Padding </label>
        <input
          type="range"
          value={styleState.padding}
          min="0.1"
          max="5"
          step="0.1"
          onChange={() => setStyleProperty("padding")}
        />
      </div>
      <div className="customize-style__text-alignment">
        <label> Text alignment </label>
        <select onChange={() => setStyleProperty("textAlign")}>
          {textAlignment.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
