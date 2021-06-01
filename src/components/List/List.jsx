import React from 'react';

import { v4 } from 'uuid';

export const List = ({ command, categories, setExecutedCommands }) => {

  const createNewListCommand = () => {
    const newCommand = {
      type: command,
      id: v4(),
      categories
    }

    setExecutedCommands(prevState => [...prevState, newCommand]);
  }

  return (
    <div className="conteiner commands-interface">
      <p className="command">{'>'} {command}</p>
      <button
        className="button"
        type="button"
        onClick={createNewListCommand}
      >
        Execute
      </button>
    </div>
  );
}