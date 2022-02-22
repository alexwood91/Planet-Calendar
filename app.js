const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(methodOverride('_method'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

var homeRouter = require('./routes/home');

// route setup
app.use('/', homeRouter);

module.exports = app;
