// components/FontSizeControl.js
import React from 'react';
import { useEditorContext } from '../context/EditorContext';

const FontSizeControl = () => {
  const { state, dispatch } = useEditorContext();

  const handleFontSizeChange = (event) => {
    dispatch({ type: 'SET_FONT_SIZE', payload: parseInt(event.target.value, 10) });
  };

  return (
    <div id="fontsize-control">
      <label>Font Size:</label>
      <input
        type="number"
        value={state.fontSize}
        onChange={handleFontSizeChange}
      />
    </div>
  );
};

export default FontSizeControl;
