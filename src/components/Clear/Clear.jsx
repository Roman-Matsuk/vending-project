import React from 'react';

import { v4 } from 'uuid';

export const Clear = ({ command, categories, setCategories, setExecutedCommands }) => {

  const clearAllEmptyCategories = () => {
    setCategories(prevState => prevState.filter(category => category.amount > 0));
  }

  const createNewClearCommand = () => {
    const emptyCategories = categories.filter(category => category.amount === 0);

    const newCommand = {
      type: command,
      id: v4(),
      emptyCategories
    }

    setExecutedCommands(prevState => [...prevState, newCommand]);
  }

  return (
    <div className="conteiner commands-interface">
      <p className="command">{'>'} {command}</p>
      <button
        className="button"
        type="button"
        onClick={() => {
          createNewClearCommand();
          clearAllEmptyCategories();
        }}
      >
        Execute
      </button>
    </div>
  )
};
