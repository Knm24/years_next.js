"use client";

import { useState } from "react";

export default function Home() {

  let currDate = new Date();
  let currDay = currDate.getDate();
  let currMonth = currDate.getMonth() + 1;
  let currYear = currDate.getFullYear();


  const [year, setYear] = useState('');
  const handleOnChangeYear = (ev: any) => {    
    setYear(String( (currYear) - Number(ev.currentTarget.value) ));
  }

  const [month, setMonth] = useState('');
  const handleOnChangeMonth = (ev: any) => {    
    console.log('currMonth: ');
    console.log(currMonth);
    setMonth(String( (currMonth) - Number(ev.currentTarget.value) ));
  }

  const [day, setDay] = useState('');
  const handleOnChangeDay = (ev: any) => {    
    setDay(String( (currDay) - Number(ev.currentTarget.value) ));
  }

  const getTotal = () => {

  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <form>
        <label htmlFor="day">Day:</label>
        <input onChange={ (ev)=> handleOnChangeDay(ev) } type="number" id="day" name="day" min="1" max="31" required />

        <label htmlFor="month">Month:</label>
        <input onChange={ (ev)=> handleOnChangeMonth(ev) } type="number" id="month" name="month" min="1" max="12" required />

        <label htmlFor="year">Year:</label>
        <input onChange={ (ev)=> handleOnChangeYear(ev) } type="number" id="year" name="year" min="1900" max="2099" required />

      </form>

      <div id="showBox">
        <p id="showYear">{year} years</p>
        <p id="showMonth">{month} month</p>
        <p id="showDay">{day} day</p>
      </div>


    </main>
  );
}
