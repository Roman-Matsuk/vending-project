import React, { useState } from 'react';
import { v4 } from 'uuid';

import './AddCategory.scss';

export const AddCategory = ({ categories, command, setCategories, setExecutedCommands }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [isError, setIsError] = useState(false);

  const createNewCategory = () => {
    if ('') {
      console.log('are');
    }
    const newCategory = {
      name,
      price: +Number(price).toFixed(2),
      amount: +amount,
      id: v4(),
    }

    if (amount === '') {
      newCategory.amount = 0;
    }

    setCategories(prevState => [...prevState, newCategory]);
  };

  const createNewExecutedCommand = () => {
    const newCommand = {
      type: command,
      id: v4(),
      categoryName: name,
      categoryPrice: +Number(price).toFixed(2),
      categoryAmount: +amount,
    }

    if (amount === '') {
      newCommand.categoryAmount = 0;
    }

    setExecutedCommands(prevState => [...prevState, newCommand]);
  };

  const renderError = () => {
    switch(true) {
      case name === '':
        return <p className="error">Please provide a name for category!</p>
  
      case price === '':
        return <p className="error">Please provide a price for category!</p>

      case categories.some(category => category.name === name):
        return <p className="error">The category already exists!</p>

      case !Number.isInteger(+amount) && amount !== '':
        return <p className="error">Please provide integer number from amount!</p>

      default:
        return <p className="error">Please check that all fields are filled</p>
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingCategory = categories.find(category => category.name === name)

    if (
      existingCategory
      || name === ''
      || price === ''
      || (!Number.isInteger(+amount) && amount !== '')
      || +amount < 0
      || +price <= 0
    ) {
      setIsError(true);
    } else {
      createNewCategory();
      createNewExecutedCommand();
      setName('');
      setPrice('');
      setAmount('');
    }
  }

  return (
    <>
      <form className="category conteiner" onSubmit={handleSubmit}>
        <p className="category__command command">{'>'} {command}</p>
        <input
          className="category__name input"
          type="text"
          placeholder="Category name"
          value={name}
          onChange={(event) => {
            setIsError(false);
            setName(event.target.value)
          }}
        />
        <input
          className="category__price input"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(event) => {
            setIsError(false);
            if (!isNaN(+event.target.value)) {
              setPrice(event.target.value)
            }
          }}
        />
        <input
          className="category__amount input"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(event) => {
            setIsError(false);
            if (!isNaN(+event.target.value)) {
              setAmount(event.target.value)
            }
          }}
        />
        <button
          className="category__button button"
          type="submit"
        >
          Execute
        </button>
      </form>
      {isError && (
        renderError()
      )}
    </>
  );
}