const Event = require('../models/event')

var EventsController = {
  New: function(req, res) {
    res.render('events/new');
  },
  Create:(function(req, res) {
var event = new Event({
  eventname: req.body.eventname,
  description: req.body.description,
  startdate: req.body.startdate,
  enddate: req.body.enddate, 
   });
   console.log('hello')
   event.save(function(err){})
 }),
}



    
module.exports = EventsController;