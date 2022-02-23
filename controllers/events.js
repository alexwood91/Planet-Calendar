const Event = require('../models/event')

var EventsController = {
  New: function(req, res) {
    res.render('events/new');
  },
  Create: function(req, res) {
    var event = new Event(
      this.eventname = req.body.eventname,
    this.description = req.body.description,
    this.startdate = req.body.startdate,
    this.enddate = req.body.enddate
    );
    console.log('hello')
    event.save()
  },
}



    
module.exports = EventsController;