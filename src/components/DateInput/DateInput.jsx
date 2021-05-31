import React from 'react';

import * as dates from '../../utils/utils';

export const DateInput = ({ month, setIsError, setYear, setMonth, setDay }) => {

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

  return (
    <>
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
    </>
  );
}