import React from 'react';

export const Output = ({ executedCommands }) => {

  const renderCommand = (command) => {
    switch(command.type) {
      case 'addCategory':
      case 'addItem':
        return (
          <li key={command.id}>{`${command.categoryName} ${command.categoryPrice} ${command.categoryAmount}`}</li>
        )

      case 'purchase':
        return (
          <li key={command.id}>
            {`${command.year}-${command.month}-${command.day}`}<br />
            {`${command.categoryName} ${command.categoryPrice}`}
          </li>
        )

      case 'list':
        return (
          command.categories.map(
            category => (
              <li key={category.id}>{`${category.name} ${category.price} ${category.amount}`}</li>
          ))
        );

      case 'clear':
        return (
          command.emptyCategories.map(
            category => (
              <li key={category.id}>{`${category.name} ${category.price}`}</li>
          ))
        )

      case 'report month':
        return (
          command.purchaseCommands === 0
          ? (
            <li key={command.id}>
              {`${command.year}-${command.month}`}
              There is no purchases
            </li>
          )
          : (<li key={command.id}>
              {`${command.year}-${command.month}`}<br />
              {command.purchaseCommands.map(command => <>{command}<br/></>)}
            </li>
          )
        );

      case 'report day':
        return (
          command.purchaseCommands === 0
          ? (
            <li key={command.id}>
              {`${command.year}-${command.month}-${command.day}`}
              There is no purchases
            </li>
          )
          : (<li key={command.id}>
              {`${command.year}-${command.month}-${command.day}`}<br />
              {command.purchaseCommands.map(command => <>{command}<br/></>)}
            </li>
          )
        );

      default:
        return <p>Error</p>;
    }
  }

  return (
    <div>
      <p>Output</p>
      <ul>
        {executedCommands.map(command => renderCommand(command))}
      </ul>
    </div>
  )
}