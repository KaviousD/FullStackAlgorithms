import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Functions() {

    
  const [sum, setSum] = useState(null);
  const [date, setDate] = useState(null);
  const [years, setYears] = useState([]);
  const [fibResult, setFibResult] = useState(null);

  useEffect(() => {
    // Fetch the list of years from the backend
    const fetchYears = async () => {
      try {
        const response = await fetch('http://localhost:5000/years');
        const data = await response.json();
        setYears(data.years);
      } catch (error) {
        console.error('Failed to fetch years:', error);
      }
    };

    fetchYears();
  }, []);

  const addNumbers = async () => {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    const response = await fetch('http://localhost:5000/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ a: num1, b: num2 }),
    });

    if (response.ok) {
      const result = await response.json();
      setSum(result.sum);
    } else {
      console.error('Failed to fetch sum');
    }
  };

  const getDayOfProgrammer = async () => {
    const year = document.getElementById('year-select').value;

    const response = await fetch('http://localhost:5000/day-of-programmer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ year }),
    });

    if (response.ok) {
      const result = await response.json();
      setDate(result.date);
    } else {
      console.error('Failed to fetch day of programmer');
    }
  };

  const calculateFibonacci = async () => {
    const n = parseInt(document.getElementById('fib-input').value);

    const response = await fetch('http://localhost:5000/fibonacci', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ n }),
    });

    if (response.ok) {
      const result = await response.json();
      setFibResult(result.fibNumber);
    } else {
      console.error('Failed to calculate Fibonacci number');
    }
  };


  return (
    <div>
      <header>
      <h1>Welcome to the Algorithms section we have 3 for testing</h1>
    </header>
    <nav>
    
      <Link to="/about">About</Link>
      <Link to="/functions">Functions</Link>
      <Link to="/splash">Splash</Link>

    </nav>
    
  
        <div className="centered-container">
    
      <h2>Test Our Functions</h2>
      <section>
        <h2>Add Two Numbers</h2>
        <input id="num1" type="number" placeholder="Enter first number" />
        <input id="num2" type="number" placeholder="Enter second number" />
        <button onClick={addNumbers}>Add</button>
        <p>Sum: {sum !== null ? sum : 'Enter numbers and click Add'}</p>
      </section>
      <section>
        <h2>Day of the Programmer</h2>
        <select id="year-select">
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <button onClick={getDayOfProgrammer}>Get Day</button>
        <p>Date: {date !== null ? date : 'Select a year and click Get Day'}</p>
      </section>
      <section>
        <h2>Calculate Fibonacci Sequence</h2>
        <input id="fib-input" type="number" placeholder="Enter a number" />
        <button onClick={calculateFibonacci}>Calculate</button>
        <p>Fibonacci Result: {fibResult !== null ? fibResult : 'Enter a number and click Calculate'}</p>
      </section>
    </div>
    </div>
  );
}

export default Functions;
