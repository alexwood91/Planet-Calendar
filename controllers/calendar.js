const Event = require('../models/event')

var CalendarController = {
  Index: function(req, res) {
    newEvent = new Event()
    newEvent.list()
    someString = 'these are some words'
    var user = req.session.user;
    res.render('calendar', { title: 'Planet' , eventslist: someString, layout: '/layoutCalendarPage', avatar: user.nickname });
  },
  Groupcal: function(req, res) {
    newEvent = new Event()
    newEvent.list()
    someString = 'these are some words'
    var user = req.session.user;
    res.render('groupcal', { title: 'Planet' , eventslist: someString, layout: '/layoutCalendarPage', avatar: user.nickname });
  }
};

module.exports = CalendarController;