const User = require('../models/user')

var HomeController = {
  Index: function(req, res) {
    res.render('home/index', { title: 'Planet', layout: '/layout' });
  },
  Create: function(req, res) {
    var user = new User(
      this.firstname = req.body.firstname,
    this.surname = req.body.surname,
    this.email = req.body.email,
    this.password = req.body.password,
    this.nickname = req.body.nickname,
    this.dob = req.body.dob,
    this.galaxies = req.body.galaxies
    );
    console.log('hello')
    user.save()

    res.status(201).redirect('/calendar');
  },
}

module.exports = HomeController;
