import React from 'react';

import { v4 } from 'uuid';

export const Clear = ({ command, setCategories, setExecutedCommands }) => {

  const clearAllEmptyCategories = () => {
    setCategories(prevState => prevState.filter(category => category.amount > 0));
  }

  const createNewClearCommand = () => {
    const newCommand = {
      type: command,
      id: v4()
    }

    setExecutedCommands(prevState => [...prevState, newCommand]);
  }

  return (
    <div>
      <p>{command}</p>
      <button
        type="button"
        onClick={() => {
          clearAllEmptyCategories();
          createNewClearCommand();
        }}
      >
        Execute
      </button>
    </div>
  )
};
