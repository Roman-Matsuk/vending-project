import React, { useState } from 'react';

import { v4 } from 'uuid';
import * as dates from '../../utils/utils';

export const Purchase = ({ categories, command, setCategories, setExecutedCommands }) => {
  const [categoryId, setCategoryId] = useState('default');
  const [isError, setIsError] = useState(false);
  const [year, setYear] = useState('default');
  const [month, setMonth] = useState('default');
  const [day, setDay] = useState('default');

  const yearsRender = (years) => {
    const yearsToRender = [];
    for (let i = years.firstYear; i <= years.lastYear; i++) {
      yearsToRender.push(i);
    }

    return yearsToRender.map(year => <option key={year} value={year}>{year}</option>);
  };

  const daysRender = (selectedMonth) => {
    let daysInMonth;
    let days = [];

    switch (selectedMonth) {
      case '01':
      case '03':
      case '05':
      case '07':
      case '08':
      case '10':
      case '12':
        daysInMonth = 31;
        break;

      case '04':
      case '06':
      case '09':
      case '11':
        daysInMonth = 30;
        break;

      case '02':
        daysInMonth = 28;
        break;

      default:
        daysInMonth = 'Select month first';
    }

    if (Number.isInteger(daysInMonth)) {
      for (let i = 0; i <= daysInMonth; i++) {
        days.push(i);
      }
      
      return days.map(day => <option key={day} value={day}>{day}</option>)
    } else {
      days.push(daysInMonth);

      return days.map(day => <option key={day} value="default">{day}</option>)
    }
  }

  const purchaseCategory = () => {
    setCategories(prevState => {
      return prevState.map(category => {
        if (category.id === categoryId) {
          category.amount -= 1;
        }

        return category;
      })
    })
  }

  const createPurchaseCommand = () => {
    const category = categories.find(ctgry => ctgry.id === categoryId);

    const newCommand = {
      type: command,
      id: v4(),
      categoryName: category.name,
      categoryPrice: category.price,
      categoryAmount: category.amount,
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
        return <p>Please select a category!</p>

      case year === 'default':
        return <p>Please select a year!</p>
      
      case month === 'default':
        return <p>Please select a month!</p>

      case day === 'default':
        return <p>Please select a day!</p>

      default:
        return <p>Please provide a date!</p>
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (year === 'default' || month === 'default' || day === 'default') {
      setIsError(true);
    } else {
      purchaseCategory();
      createPurchaseCommand();
    }
  }

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
        <select
          onChange={(event) => {
            setIsError(false);
            setYear(event.target.value)
          }}
        >
          <option value="default">
            Select year
          </option>
          {yearsRender(dates.yearBoundaries)}
        </select>
        <select
          onChange={(event) => {
            setIsError(false);
            setMonth(event.target.value)
          }}
        >
          <option value="default">
            Select month
          </option>
          {dates.months.map(month => <option key={month} value={month}>{month}</option>)}
        </select>
        <select
          onChange={(event) => {
            setIsError(false);
            setDay(event.target.value)
          }}
        >
          <option value="default">
            Select day
          </option>
          {daysRender(month)}
        </select>
        <button type="submit" disabled={categoryId !== 'default' && setButton()}>
          Execute
        </button>
        {isError && renderError()}
      </form>
    </div>
  );
}