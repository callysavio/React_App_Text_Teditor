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
      <p id="footer">&copy;2024 Developed by Callistus Anwara</p>
      </div>
  );
};

export default App;
