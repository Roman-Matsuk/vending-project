import React, { useState } from 'react';

import { v4 } from 'uuid';

import { DateInput } from '../DateInput';

export const Report = ({
  command,
  categories,
  executedCommands,
  setCategories,
  setExecutedCommands,
}) => {
  const [isError, setIsError] = useState(false);
  const [year, setYear] = useState('default');
  const [month, setMonth] = useState('default');
  const [day, setDay] = useState('default');

  const func = (commands) => {
    // let result = {}

    // for (let i = 0; i < commands.length; i++) {
    //   if (result.hasOwnProperty(commands[i].categoryName)) {
    //     result[commands[i].categoryName] += 1
    //   } else {
    //     result[commands[i].categoryName] = 1
    //   }
    // }

    // return Object.entries(result).map(entry => entry.reduce((prev, curr) => `${prev} ${curr}`));

    let result = [];

    for (let i = 0; i < commands.length; i++) {
      const isCategoryExists = result.some(category => category.name === commands[i].categoryName);

      if (isCategoryExists) {
        const existingCategory = result.find(category => category.name === commands[i].categoryName);

        existingCategory.amount += 1;
      } else {
        const category = {
          name: commands[i].categoryName,
          price: commands[i].categoryPrice,
          amount: 1,
        }

        result.push(category)
      }
    }

    return result.sort((a, b) => a.name.localeCompare(b.name));
  }

  const createNewReportCommand = () => {
    let purchasedCategories;
    let total;

    const newCommand = {
      type: command,
      id: v4(),
      purchasedCategories,
      total,
      year,
      month
    };

    if (day === 'default') {
      const allPurchaseCommands = executedCommands.filter(
        command => command.type === 'purchase' && command.year === year && command.month === month
      );

      newCommand.purchasedCategories = func(allPurchaseCommands);
      newCommand.total = allPurchaseCommands.reduce((prev, current) => prev + current.categoryPrice, 0);
      newCommand.type = newCommand.type + ' month';
    } else {
      const allPurchaseCommands = executedCommands.filter(
        command => command.type === 'purchase' && command.year === year && command.month === month && command.day === day
      );

      newCommand.purchasedCategories = func(allPurchaseCommands);
      newCommand.total = allPurchaseCommands.reduce((prev, current) => prev + current.categoryPrice, 0);
      newCommand.type = newCommand.type + ' day';
      newCommand.day = day;
    }

    setExecutedCommands(prevState => [...prevState, newCommand]);
  }

  const renderError = () => {
    switch (true) {
      case year === 'default':
        return <p className="error">Please select a year!</p>
      
      case month === 'default':
        return <p className="error">Please select a month!</p>

      default:
        return <p className="error">Please provide a date!</p>
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (year === 'default' || month === 'default') {
      setIsError(true);
    } else {
      createNewReportCommand();
    }
  }

  return (
    <>
      <form className="conteiner commands-interface" onSubmit={handleSubmit}>
        <p className="command">{'>'} {command}</p>
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
        >
          Execute
        </button>
      </form>
      {isError && renderError()}
    </>
  );
}