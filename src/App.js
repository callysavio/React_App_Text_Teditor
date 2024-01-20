import React from 'react';
import { EditorContextProvider } from './context/EditorContext';
import TextEditor from './components/TextEditor';
import Toolbar from './components/Toolbar';

const App = () => {
  return (
    <div>
      <h3 id="heading">TEXT EDITOR APP</h3>
    <div id="app-container">
    <EditorContextProvider>
      <Toolbar />
      <TextEditor />
      </EditorContextProvider>
      </div>
      </div>
  );
};

export default App;
