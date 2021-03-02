import CustomizeStyle from "./CustomizeStyle.js";

export default function Font({ displayState, styleState, setStyleState }) {
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

  function generateCode(styleState) {
    return JSON.stringify(generateStyle(styleState));
  }

  return (
    <div style={{ display: !displayState ? "none" : "initial" }}>
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
            <div style={{ display: "none" }}>{generateCode(styleState)}</div>
            <button
              onClick={() => {
                window.navigator.clipboard.writeText(generateCode(styleState));
              }}
            >
              Copy &lt;/&gt;{" "}
            </button>
          </code>
        </div>
      </div>
      <CustomizeStyle styleState={styleState} setStyleState={setStyleState} />
    </div>
  );
}
