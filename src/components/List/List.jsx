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
    <div className="conteiner one-command">
      <p className="command one-command__title">{'>'} {command}</p>
      <button
        className="button list__button"
        type="button"
        onClick={createNewListCommand}
      >
        Execute
      </button>
    </div>
  );
}