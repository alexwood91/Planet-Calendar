const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

var homeRouter = require('./routes/home');
var calendarRouter = require('./routes/calendar');

// route setup
app.use('/', homeRouter);
app.use('/calendar', calendarRouter)
module.exports = app;
