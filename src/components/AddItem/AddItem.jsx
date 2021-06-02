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
          category.amount += +newAmount;
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

  const renderError = () => {
    switch (true) {
      case categoryId === 'default':
        return <p className="error">Please select a category!</p>

      case !Number.isInteger(+newAmount) && newAmount !== '':
        return <p className="error">Please provide integer number from amount!</p>

      default:
        return <p className="error">Please provide amount!</p>
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newAmount === '' || !Number.isInteger(+newAmount) || categoryId === 'default') {
      setIsError(true);
    } else {
      addAmountToCategory();
      createAddItemCommand();
      setNewAmount('');
    }
  };

  return (
    <>
      <form className="item item--parameters conteiner commands-interface" onSubmit={handleSubmit}>
        <p className="command">{'>'} {command}</p>
        <select
          className="input"
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
          className="input"
          type="number"
          value={newAmount}
          onChange={event => {
            setIsError(false);
            if (!isNaN(+event.target.value)) {
              setNewAmount(event.target.value)
            }
          }}
        />
        <button
          className="button"
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