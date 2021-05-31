import React from 'react';

export const Output = ({ executedCommands }) => {

  const renderCommand = (command) => {
    switch(command.type) {
      case 'addCategory':
      case 'addItem':
        return (
          <p key={command.id}>{`${command.categoryName} ${command.categoryPrice} ${command.categoryAmount}`}</p>
        )

      case 'purchase':
        return (
          <ul key={command.id}>
            <li>{`${command.year}-${command.month}-${command.day}`}</li>
            <li>{`${command.categoryName} ${command.categoryPrice}`}</li>
          </ul>
        )

      case 'list':
        return (
          command.categories.map(
            category => (
              <p key={category.id}>{`${category.name} ${category.price} ${category.amount}`}</p>
          ))
        );

      case 'clear':
        return (
          command.emptyCategories.map(
            category => (
              <p key={category.id}>{`${category.name} ${category.price}`}</p>
          ))
        )

      // case 'report month':
      //   return (
      //     command.purchaseCommands.map
      //   );

      default:
        return <p>Error</p>;
    }
  }

  return (
    <div>
      <p>Output</p>
      {executedCommands.map(command => renderCommand(command))}
    </div>
  )
}