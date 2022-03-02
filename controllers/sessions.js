var User = require('../models/user');
const { Pool } = require('pg')
const pool = new Pool({
  user: 'jackie.benn',
  host: 'localhost',
  database: 'planet',
  password: 'password',
  port: 5432
})

var SessionsController = {
  New: function(req, res) {
    res.render('sessions/new', { layout: '/layoutLogInPage' });
  },

  Create: function(req, res) {
    var email = req.body.email; 
    var password = req.body.password;

    User.find(email).then(
      (users) => {
      if (users.password != password) {
        console.log('incorrect username or password');
        res.render('sessions/new');
      } else {
        req.session.user = users;
        console.log(users.nickname)
        res.render('calendar', { layout: '/layoutCalendarPage', avatar: users.nickname });
      }
    })
  },

  Destroy: function(req, res) {
    console.log('logging out')
    if (req.session.user && req.cookies.user_sid) { 
      res.clearCookie('user_sid');
    }
    res.redirect('/home/index');
  }
};

module.exports = SessionsController;
