const express = require('express');
const app = express();
const port = 3000;

app.get('/sessions/new', (req, res) => {
  res.render('sessions/new');
});

// view engine setup
app.set('views');
app.set('view engine', 'hbs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(methodOverride('_method'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

var homeRouter = require('./routes/home');
// var sessionsRouter = require('./routes/sessions');

// route setup
app.use('/', homeRouter);
// app.use('/sessions', sessionsRouter);

module.exports = app;
