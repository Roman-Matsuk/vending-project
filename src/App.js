import React, { useState } from 'react';
import './App.css';

import { CommandsPage } from './components/CommandsPage';

function App() {
  const [categories, setCategories] = useState([]);
  const [executedCommands, setExecutedCommands] = useState([]);
  const [command, setCommand] = useState('');

  console.log("categories", categories);
  console.log("executedCommands", executedCommands);

  return (
    <div className="App">
      <select onChange={(event) => setCommand(event.target.value)}>
        <option value="addCategory">Select command</option>
        <option value="addCategory">addCategory</option>
        <option value="addItem">addItem</option>
        <option value="purchase">purchase</option>
        <option value="list">list</option>
        <option value="clear">clear</option>
        <option value="report">report</option>
      </select>
      <CommandsPage
        categories={categories}
        command={command}
        executedCommands={executedCommands}
        setCategories={setCategories}
        setExecutedCommands={setExecutedCommands}
      />
    </div>
  );
}

export default App;
