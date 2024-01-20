// context/EditorContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
  text: '',
  fontSize: 16,
  textColor: 'black',
  fontFamily: 'Arial', // Default font family
  history: [],
  historyIndex: -1,
};

// Create context
const EditorContext = createContext();

// Define actions
const actionTypes = {
  SET_TEXT: 'SET_TEXT',
  SET_FONT_SIZE: 'SET_FONT_SIZE',
  SET_TEXT_COLOR: 'SET_TEXT_COLOR',
  SET_FONT_FAMILY: 'SET_FONT_FAMILY',
  UNDO: 'UNDO',
  REDO: 'REDO',
};

// Reducer function
const editorReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_TEXT:
      return {
        ...state,
        text: action.payload,
        history: [...state.history, { ...state }],
        historyIndex: state.historyIndex + 1,
      };
    case actionTypes.SET_FONT_SIZE:
      return {
        ...state,
        fontSize: action.payload,
        history: [...state.history, { ...state }],
        historyIndex: state.historyIndex + 1,
      };
    case actionTypes.SET_TEXT_COLOR:
      return {
        ...state,
        textColor: action.payload,
        history: [...state.history, { ...state }],
        historyIndex: state.historyIndex + 1,
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.payload,
        history: [...state.history, { ...state }],
        historyIndex: state.historyIndex + 1,
      };
    case actionTypes.UNDO:
      if (state.historyIndex > 0) {
        return {
          ...state.history[state.historyIndex - 1],
          history: state.history,
          historyIndex: state.historyIndex - 1,
        };
      }
      return state;
    case actionTypes.REDO:
      if (state.historyIndex < state.history.length - 1) {
        return {
          ...state.history[state.historyIndex + 1],
          history: state.history,
          historyIndex: state.historyIndex + 1,
        };
      }
      return state;
    default:
      return state;
  }
};

// Context provider component
export const EditorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(editorReducer, initialState);

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
};

// Custom hook to access the context
export const useEditorContext = () => useContext(EditorContext);
