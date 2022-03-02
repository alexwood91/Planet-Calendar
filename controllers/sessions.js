var User = require('../models/user');
const { Pool } = require('pg')
const pool = new Pool({

  user: 'rosie.waite',
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
      (user) => {
      if (user.password != password) {
        console.log('incorrect username or password');
        res.render('sessions/new');
      } else {
        console.log('logged in?')
        req.session.save()
        req.session.user = user;
        console.log(user)
        res.redirect('calendar', { layout: '/layoutCalendarPage' });
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
