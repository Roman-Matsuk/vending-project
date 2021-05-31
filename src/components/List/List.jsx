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
    <div>
      <p>{command}</p>
      <button
        type="button"
        onClick={createNewListCommand}
      >
        Execute
      </button>
    </div>
  );
}