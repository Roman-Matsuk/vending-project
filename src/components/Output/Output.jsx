import React from 'react';

import './Output.scss';

export const Output = ({ executedCommands }) => {

  const renderCommand = (command) => {
    switch(command.type) {
      case 'addCategory':
      case 'addItem':
        return (
          <li className="output__item" key={command.id}>
            {`${command.categoryName} ${command.categoryPrice} ${command.categoryAmount}`}
          </li>
        )

      case 'purchase':
        return (
          <li className="output__item" key={command.id}>
            {`${command.year}-${command.month}-${command.day}`}<br />
            {`${command.categoryName} ${command.categoryPrice}`}
          </li>
        )

      case 'list':
        return (
          [...command.categories].sort((a, b) => b.amount - a.amount).map(
            category => (
              <li className="output__item" key={category.id}>{`${category.name} ${category.price} ${category.amount}`}</li>
          ))
        );

      case 'clear':
        return (
          command.emptyCategories.map(
            category => (
              <li className="output__item" key={category.id}>{`${category.name} ${category.price}`}</li>
          ))
        )

      case 'report month':
        return (
          command.purchaseCommands === 0
          ? (
            <li className="output__item" key={command.id}>
              {`${command.year}-${command.month}`}
              There is no purchases
            </li>
          )
          : (<li className="output__item" key={command.id}>
              {`${command.year}-${command.month}`}<br />
              {command.purchaseCommands.map(command => <>{command}<br/></>)}
              {`> Total: ${command.total}`}
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
              {`> Total: ${command.total}`}
            </li>
          )
        );

      default:
        return <p>Error</p>;
    }
  }

  return (
    <div className="output">
      <p>Output</p>
      <ul className="output__list">
        {executedCommands.map(command => renderCommand(command))}
      </ul>
    </div>
  )
}