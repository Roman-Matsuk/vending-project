import React from 'react';

import { AddCategory } from '../AddCategory';
import { AddItem } from '../AddItem';
import { Clear } from '../Clear';
import { List } from '../List';
import { Purchase } from '../Purchase';
import { Report } from '../Report';

export const CommandsPage = ({ categories, command, executedCommands, setCategories, setExecutedCommands }) => {
  
  const render = (command) => {
    switch (command) {
      case 'addCategory':
        return (
          <AddCategory
            categories={categories}
            command={command}
            setCategories={setCategories}
            setExecutedCommands={setExecutedCommands}
          />
        );

      case 'addItem':
        return (
          <AddItem
            categories={categories}
            command={command}
            setCategories={setCategories}
            setExecutedCommands={setExecutedCommands}
          />
        );

      case 'purchase':
        return (
          <Purchase
            categories={categories}
            command={command}
            setCategories={setCategories}
            setExecutedCommands={setExecutedCommands}
          />
        );

      case 'list':
        return (
          <List
            command={command}
            categories={categories}
            setExecutedCommands={setExecutedCommands}
          />
        );

      case 'clear':
        return (
          <Clear
            command={command}
            categories={categories}
            setCategories={setCategories}
            setExecutedCommands={setExecutedCommands}
          />
        );

      case 'report':
        return (
          <Report
            command={command}
            categories={categories}
            executedCommands={executedCommands}
            setCategories={setCategories}
            setExecutedCommands={setExecutedCommands}
          />
        );

      default:
        return <p>To start select a command!</p>
    }
  }
  
  return (
    <div>
      {render(command)}
    </div>
  );
}