import React, { useState } from 'react';
import './App.scss';

import { CommandsPage } from './components/CommandsPage';
import { Header } from './components/Header';
import { Output } from './components/Output';

function App() {
  const [categories, setCategories] = useState([]);
  const [executedCommands, setExecutedCommands] = useState([]);
  const [command, setCommand] = useState('');

  console.log("categories", categories);
  console.log("executedCommands", executedCommands);

  return (
    <div className="App">
      <Header setCommand={setCommand} />
      <CommandsPage
        categories={categories}
        command={command}
        executedCommands={executedCommands}
        setCategories={setCategories}
        setExecutedCommands={setExecutedCommands}
      />
      <Output executedCommands={executedCommands} />
    </div>
  );
}

export default App;
