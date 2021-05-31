import React, { useState } from 'react';
import { v4 } from 'uuid';

export const AddItem = ({ categories, command, setCategories, setExecutedCommands }) => {
  const [categoryId, setCategoryId] = useState('default');
  const [newAmount, setNewAmount] = useState('');
  const [isError, setIsError] = useState(false);

  const addAmountToCategory = () => {
    setCategories(prevState => {
      return prevState.map(category => {
        if (category.id === categoryId) {
          category.amount += newAmount;
        }

        return category;
      })
    })
  };

  const createAddItemCommand = () => {
    const category = categories.find(ctgry => ctgry.id === categoryId);

    const newCommand = {
      type: command,
      id: v4(),
      categoryName: category.name,
      categoryPrice: category.price,
      categoryAmount: category.amount,
    };

    setExecutedCommands(prevState => [...prevState, newCommand]);
  };

  const handleErrors = () => {
    switch (true) {
      case categoryId === 'default':
        return <p>Please select a category!</p>

      case !Number.isInteger(newAmount) && newAmount !== '':
        return <p>Please provide integer number from amount!</p>

      default:
        return <p>Please provide amount!</p>
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newAmount === '' || !Number.isInteger(newAmount) || categoryId === 'default') {
      setIsError(true);
    } else {
      addAmountToCategory();
      createAddItemCommand();
      setNewAmount('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>{command}</p>
        <select
          value={categoryId}
          onChange={event => {
            setIsError(false);
            setCategoryId(event.target.value);
          }}
        >
          <option value="default">Select category</option>
          {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
        </select>
        <input
          type="number"
          value={newAmount}
          onChange={event => {
            setIsError(false);
            setNewAmount(+event.target.value)
          }}
        />
        <button type="submit">
          Execute
        </button>
        {isError && (
          handleErrors()
        )}
      </form>
    </div>
  );
}