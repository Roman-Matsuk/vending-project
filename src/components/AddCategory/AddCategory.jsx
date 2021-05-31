import React, { useState } from 'react';
import { v4 } from 'uuid';

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
      price: +price.toFixed(2),
      amount: amount,
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
      categoryPrice: +price.toFixed(2),
      categoryAmount: amount,
    }

    if (amount === '') {
      newCommand.categoryAmount = 0;
    }

    setExecutedCommands(prevState => [...prevState, newCommand]);
  };

  const handleErrorMessages = () => {
    switch(true) {
      case name === '':
        return <p>Please provide a name for category!</p>
  
      case price === '':
        return <p>Please provide a price for category!</p>

      case categories.some(category => category.name === name):
        return <p>The category already exists!</p>

      case !Number.isInteger(amount) && amount !== '':
        return <p>Please provide integer number from amount!</p>

      default:
        return <p>Please check that all fields are filled</p>
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingCategory = categories.find(category => category.name === name)

    if (existingCategory || name === '' || price === '' || (!Number.isInteger(amount) && amount !== '')) {
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
    <div>
      <form onSubmit={handleSubmit}>
        <p>{command}</p>
        <input
          type="text"
          placeholder="Category name"
          value={name}
          onChange={(event) => {
            setIsError(false);
            setName(event.target.value)
          }}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(event) => {
            setIsError(false);
            setPrice(+event.target.value)
          }}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(event) => {
            setIsError(false);
            setAmount(+event.target.value)
          }}
        />
        <button type="submit">Execute</button>
        {isError && (
          handleErrorMessages()
        )}
      </form>
    </div>
  );
}