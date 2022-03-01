const Event = require('../models/event')
const List = require('../models/list')

var EventsController = {
  New: function(req, res) {
    res.render('events/new');
  },
  Create: function(req, res) {
    var event = new Event(
      this.eventname = req.body.eventname,
    this.description = req.body.description,
    this.startdate = req.body.startdate,
    this.enddate = req.body.enddate,
    this.privateevent = req.body.privateevent
    );
    console.log('hello')
    event.save()
    res.status(201).redirect('/calendar');
  },
}
    
module.exports = EventsController;
