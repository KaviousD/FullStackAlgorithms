const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;


app.use(express.json());


app.use(cors());


app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => {
  res.send('Hello from the server!');
});


app.post('/add', (req, res) => {
  const { a, b } = req.body;
  const sum = a + b;
  res.json({ sum });
});


app.post('/day-of-programmer', (req, res) => {
  const { year } = req.body;
  const dayOfProgrammer = getDayOfProgrammer(year);
  res.json({ date: dayOfProgrammer });
});


app.get('/years', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/data.json'));
});


app.post('/fibonacci', (req, res) => {
  const { n } = req.body;
  if (n < 0) {
    return res.status(400).json({ error: 'Input must be a non-negative integer' });
  }

  const fibNumber = fibonacci(n);
  res.json({ fibNumber });
});


function getDayOfProgrammer(year) {
  let dayOfProgrammer;
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {

    dayOfProgrammer = `12.09.${year}`;
  } else {

    dayOfProgrammer = `13.09.${year}`;
  }
  return dayOfProgrammer;
}


function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
