"use client";

import { useState } from "react";

export default function Home() {

  let currDate = new Date();



  const [year, setYear] = useState('');
  const handleOnChangeYear = (ev: any) => {
    setYear(ev.target.value);
    getTotal(ev.target.value, month, day);

  }

  const [month, setMonth] = useState('');
  const handleOnChangeMonth = (ev: any) => {
    setMonth(String(Number(ev.currentTarget.value) - 1));
    getTotal(year, String(Number(ev.currentTarget.value) - 1), day);
  }

  const [day, setDay] = useState('');
  const handleOnChangeDay = (ev: any) => {
    setDay(ev.currentTarget.value);
    getTotal(year, month, ev.target.value);
  }

  const [diffDay, setDiffDay] = useState('');
  const [diffMonth, setDiffMonth] = useState('');
  const [diffYear, setDiffYear] = useState('');


  const getTotal = (year: string, month: string, day: string) => {
    let userDate = new Date(Number(year), Number(month), Number(day), Number(currDate.getHours()), Number(currDate.getMinutes()), Number(currDate.getSeconds()-1) );
    const diffTime = new Date(Number(currDate) - Number(userDate));

    console.log('currDate');
    console.log(currDate);
    console.log('userDate');
    console.log(userDate);

    let isLeapYear: number;
    if (new Date(Number(year), 2, 0).getDate() == 29)
      isLeapYear = 366;
    else
      isLeapYear = 365;


    const diffDays = Math.ceil(Number(diffTime) / (1000 * 60 * 60 * 24));
    const diffYears = Math.floor(diffDays / isLeapYear);
    const remainingDays = diffDays % isLeapYear;
    const diffMonths = Math.floor(remainingDays / 30);
    const diffDay = remainingDays - (diffMonths * 30);


    setDiffDay(String(diffDay));
    setDiffMonth(String(diffMonths));
    setDiffYear(String(diffYears));

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <form>
        <label htmlFor="day">Day:</label>
        <input onChange={(ev) => handleOnChangeDay(ev)} type="number" id="day" name="day" min="1" max="31" required />

        <label htmlFor="month">Month:</label>
        <input onChange={(ev) => handleOnChangeMonth(ev)} type="number" id="month" name="month" min="1" max="12" required />

        <label htmlFor="year">Year:</label>
        <input onChange={(ev) => handleOnChangeYear(ev)} type="number" id="year" name="year" min="1900" max="2099" required />

      </form>
      -{day}--{month}--{year}-
      <div id="showBox">
        <p id="showYear">{diffYear} years</p>
        <p id="showMonth">{diffMonth} month</p>
        <p id="showDay">{diffDay} day</p>
      </div>


    </main>
  );
}
