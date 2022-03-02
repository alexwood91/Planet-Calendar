const express = require('express');
const app = express();
const port = 3000;
var path = require('path');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');



app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ key: 'user_sid',
  secret: 'super_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
  expires: 600000 }
  })
);

// clear the cookies after user logs out
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});

// middleware function to check for logged-in users


var sessionChecker = (req, res, next) => {
  if (req.originalUrl == '/calendar' && !req.session.user && !req.cookies.user_sid) {  // post session checker
      res.redirect('/sessions/new');
  } else if (req.originalUrl == '/' && (req.session.user || req.cookies.user_sid)) {  // home session checker
      res.redirect('/calendar');
  // } else if (req.originalUrl == '/users/profile' && !req.session.user && !req.cookies.user_sid) {  // post session checker
  //       res.redirect('/users/new');   
  } else {
    next();
  }
};

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

var homeRouter = require('./routes/home');
var eventRouter = require('./routes/events')
var calendarRouter = require('./routes/calendar');
var apiRouter = require('./routes/api');
app.use('/api', apiRouter);
var sessionsRouter = require('./routes/sessions');
// route setup
app.use('/', sessionChecker, homeRouter);
app.use('/events', sessionChecker, eventRouter);
app.use('/calendar', sessionChecker, calendarRouter, apiRouter);
app.use('/sessions', sessionsRouter);
module.exports = app;
