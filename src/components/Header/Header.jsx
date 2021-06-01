import React from 'react';

import './Header.scss';

export const Header = ({ setCommand }) => {
  return (
    <header className="header header--parameters">
      <h2 className="header__title">Vending machine</h2>
      <select
        className="header__select"
        onChange={(event) => setCommand(event.target.value)}
      >
        <option value="addCategory">Select command</option>
        <option value="addCategory">addCategory</option>
        <option value="addItem">addItem</option>
        <option value="purchase">purchase</option>
        <option value="list">list</option>
        <option value="clear">clear</option>
        <option value="report">report</option>
      </select>
    </header>
  )
}