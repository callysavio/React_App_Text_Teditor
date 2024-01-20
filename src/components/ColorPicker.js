// components/ColorPicker.js
import React from 'react';
import { useEditorContext } from '../context/EditorContext';

const ColorPicker = () => {
  const { state, dispatch } = useEditorContext();

  const handleColorChange = (event) => {
    dispatch({ type: 'SET_TEXT_COLOR', payload: event.target.value });
  };

  return (
    <div id="color-control">
      <label>Text Color:</label>
      <input
        type="color"
        value={state.textColor}
              onChange={handleColorChange}
              id="color-picker"
      />
    </div>
  );
};

export default ColorPicker;
