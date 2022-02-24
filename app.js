const express = require('express');
const app = express();
const port = 3000;
var path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
// view engine setup

// app.get('/events/new', function(req, res){
//   res.render('events/new');
// });

// app.get('/sessions/new', (req, res) => {
//   res.render('sessions/new');
// });

// app.get('calendar', function(req, res){
//   res.render('/calendar');
// })
// app.post('/events/new', function(req, res){
//   res.render('events/new');
// })
// app.post('/', function(req, res){
//   res.render('/');
// })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

var homeRouter = require('./routes/home');
var eventRouter = require('./routes/events')
var calendarRouter = require('./routes/calendar');
// var sessionsRouter = require('./routes/sessions');
// route setup
app.use('/', homeRouter);
app.use('/events', eventRouter);
app.use('/calendar', calendarRouter);
// app.use('/sessions', sessionsRouter);
module.exports = app;
