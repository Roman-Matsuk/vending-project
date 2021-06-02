import React from 'react';

import './Output.scss';

export const Output = ({ executedCommands }) => {

  const renderCommand = (command) => {
    switch(command.type) {
      case 'addCategory':
      case 'addItem':
        return (
          <li className="output__item" key={command.id}>
            {`${command.categoryName} ${command.categoryPrice.toFixed(2)} ${command.categoryAmount}`}
          </li>
        )

      case 'purchase':
        return (
          <li className="output__item" key={command.id}>
            {`${command.year}-${command.month}-${command.day}`}<br />
            {`${command.categoryName} ${command.categoryPrice.toFixed(2)}`}
          </li>
        )

      case 'list':
        return (
          <li className="output__item" key={command.id}>
            {command.categories.length !== 0
              ? [...command.categories].sort((a, b) => b.amount - a.amount).map(
                  category => (
                    <>{`${category.name} ${category.price.toFixed(2)} ${category.amount}`}<br /></>
                ))
              : 'There is no categories'}
          </li>
        );

      case 'clear':
        return (
          command.emptyCategories.map(
            category => (
              <li className="output__item" key={category.id}>{`${category.name} ${category.price.toFixed(2)}`}</li>
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
              {command.purchasedCategories.map(
                categorie => (
                  <span key={categorie.name}>
                    {`${categorie.name} ${(categorie.price * categorie.amount).toFixed(2)} ${categorie.amount}`}<br/>
                  </span>
                )
              )}
              {`> Total: ${command.total}`}
            </li>
          )
        );

      case 'report day':
        return (
          command.purchaseCommands === 0
          ? (
            <li className="output__item" key={command.id}>
              {`${command.year}-${command.month}-${command.day}`}
              There is no purchases
            </li>
          )
          : (<li className="output__item" key={command.id}>
              {`${command.year}-${command.month}-${command.day}`}<br />
              {command.purchasedCategories.map(
                categorie => (
                  <span key={categorie.name}>
                    {`${categorie.name} ${(categorie.price * categorie.amount).toFixed(2)} ${categorie.amount}`}<br/>
                  </span>
                )
              )}
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
      <p className="output__header">Output</p>
      <ul className="output__list">
        {executedCommands.map(command => renderCommand(command))}
      </ul>
    </div>
  )
}