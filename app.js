const express = require('express');
const app = express();
const port = 3000;

// view engine setup

app.get('/events/new', function(req, res){
  res.render('events/new');
});

app.set('views');
app.set('view engine', 'hbs');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

var homeRouter = require('./routes/home');
var eventRouter = require('./routes/events')

// route setup
app.use('/', homeRouter);
app.use('/new', eventRouter);

module.exports = app;
