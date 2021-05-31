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

  const createNewReportCommand = () => {
    let purchaseCommands;

    if (day === 'default') {
      purchaseCommands = executedCommands.filter(
        command => command.type === 'purchase' && command.year === year && command.month === month
      );
    } else {
      purchaseCommands = executedCommands.filter(
        command => command.type === 'purchase' && command.year === year && command.month === month && command.day === day
      );
    }

    const newCommand = {
      type: command,
      id: v4(),
      purchaseCommands
    };

    setExecutedCommands(prevState => [...prevState, newCommand]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    createNewReportCommand();
  }

  return (
    <div>
      <p>{command}</p>
      <form onSubmit={handleSubmit}>
        <DateInput
          month={month}
          setIsError={setIsError}
          setYear={setYear}
          setMonth={setMonth}
          setDay={setDay}
        />
        <button type="submit">
          Execute
        </button>
      </form>
      {isError && <p>An error ocured</p>}
    </div>
  );
}