// components/TextEditor.js
import React from "react";
import { useEditorContext } from "../context/EditorContext";

const TextEditor = () => {
  const { state, dispatch } = useEditorContext();

  const handleChange = (event) => {
    dispatch({ type: "SET_TEXT", payload: event.target.value });
  };

  return (
    <>
      <textarea
        id="textarea"
        placeholder="Please type any text..."
        value={state.text}
        onChange={handleChange}
        style={{
          fontSize: state.fontSize + "px",
          color: state.textColor,
          fontFamily: state.fontFamily,
        }}
      />
    </>
  );
};

export default TextEditor;
