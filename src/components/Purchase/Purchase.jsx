import React, { useState } from 'react';

import { v4 } from 'uuid';

import { DateInput } from '../DateInput';

export const Purchase = ({ categories, command, setCategories, setExecutedCommands }) => {
  const [categoryId, setCategoryId] = useState('default');
  const [isError, setIsError] = useState(false);
  const [year, setYear] = useState('default');
  const [month, setMonth] = useState('default');
  const [day, setDay] = useState('default');

  const purchaseCategory = () => {
    setCategories(prevState => {
      return prevState.map(category => {
        if (category.id === categoryId) {
          category.amount = category.amount - 1;
        }

        return category;
      })
    })
  };

  const createPurchaseCommand = () => {
    const category = categories.find(ctgry => ctgry.id === categoryId);

    const newCommand = {
      type: command,
      id: v4(),
      categoryName: category.name,
      categoryPrice: category.price,
      categoryId,
      year,
      month,
      day,
    };

    setExecutedCommands(prevState => [...prevState, newCommand]);
  };

  const setButton = () => {
    const category = categories.find(ctgry => ctgry.id === categoryId);

    if (category.amount === 0) {
      return true
    } else {
      return false
    }
  }

  const renderError = () => {
    switch (true) {
      case categoryId === 'default': 
        return <p className="error">Please select a category!</p>

      case year === 'default':
        return <p className="error">Please select a year!</p>
      
      case month === 'default':
        return <p className="error">Please select a month!</p>

      case day === 'default':
        return <p className="error">Please select a day!</p>

      default:
        return <p className="error">Please provide a date!</p>
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (year === 'default' || month === 'default' || day === 'default') {
      setIsError(true);
    } else {
      purchaseCategory();
      createPurchaseCommand();
      setCategoryId('default');
      setYear('default');
      setMonth('default');
      setDay('default');
    }
  }

  return (
    <>
      <form className="conteiner commands-interface" onSubmit={handleSubmit}>
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
        <DateInput
          year={year}
          month={month}
          day={day}
          setIsError={setIsError}
          setYear={setYear}
          setMonth={setMonth}
          setDay={setDay}
        />
        <button
          className="button"
          type="submit"
          disabled={categoryId !== 'default' && setButton()}
        >
          Execute
        </button>
      </form>
      {isError && renderError()}
    </>
  );
}