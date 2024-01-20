// components/Toolbar.js
import React from 'react';
import FontSizeControl from './FontSizeControl';
import ColorPicker from './ColorPicker';
import { useEditorContext } from '../context/EditorContext';

const fontFamilies = [
  'Arial',
  'Verdana',
  'Georgia',
  'Times New Roman',
  'Courier New',
  'Arial Black',
  'Comic Sans MS',
  'Impact',
  'Lucida Console',
  // Add more font families as needed
];

const Toolbar = () => {
  const { state, dispatch } = useEditorContext();

  const handleUndo = () => {
    dispatch({ type: 'UNDO' });
  };

  const handleRedo = () => {
    dispatch({ type: 'REDO' });
  };

  const handleFontFamilyChange = (event) => {
    dispatch({ type: 'SET_FONT_FAMILY', payload: event.target.value });
  };

  return (
      <div id="tool-bar">
          <div id="redo-undo">
      <button onClick={handleUndo}><i className='fa fa-undo'></i> Undo</button>
              <button onClick={handleRedo}><i className='fa fa-repeat'></i> Redo</button>
              </div>
      <FontSizeControl />
      <ColorPicker />

      <label>Font Family:</label>
      <select value={state.fontFamily} onChange={handleFontFamilyChange}>
        {fontFamilies.map((fontFamily, index) => (
          <option key={index} value={fontFamily}>
            {fontFamily}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Toolbar;
