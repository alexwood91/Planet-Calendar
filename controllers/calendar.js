const Event = require('../models/event')

var CalendarController = {
  Index: function(req, res) {
    newEvent = new Event()
    newEvent.list()

    res.render('calendar', { title: 'Planet' });
  }
};

module.exports = CalendarController;