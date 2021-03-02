export default function Button({ displayState, buttonStyle, setButtonStyle }) {
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
    <div
      className="customize-button"
      style={{ display: !displayState ? "none" : "initial" }}
    >
      <button className="display-button" style={generateStyle(buttonStyle)}>
        Click!
      </button>
      <div className="customize-style--color">
        <div>
          <label> Background </label>
          <input
            type="color"
            onChange={() => setStylePorperty("backgroundColor")}
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
  );
}
