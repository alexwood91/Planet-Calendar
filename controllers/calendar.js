const Event = require('../models/event')

var CalendarController = {
  Index: function(req, res) {
    newEvent = new Event()
    newEvent.list()
    someString = 'these are some words'   
    res.render('calendar', { title: 'Planet' , eventslist: someString, layout: '/layoutCalendarPage' });
  }
};

module.exports = CalendarController;