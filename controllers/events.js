const Event = require('../models/event',)
const { Pool } = require('pg');
const pool = new Pool({
  
  user: 'rosie.waite',
  host: 'localhost',
  database: 'planet',
  password: 'password',
  port: 5432
})

var EventsController = {

  // Index: function(req, res) {
  //   (event) => {
  //   events = Event.all();
  //   console.log(events)
  // }
  // res.render('calendar', { layout: '/layoutCalendarPage', eventuser: this.eventuser });
  // },

  New: function(req, res) {
    res.render('events/new');
  },
  Create: function(req, res) {
    var event = new Event(
      this.eventname = req.body.eventname,
    this.description = req.body.description,
    this.startdate = req.body.startdate,
    this.enddate = req.body.enddate,
    this.privateevent = req.body.privateevent,
    this.eventuser = req.session.user.id,
    this.eventgalaxies = req.session.user.galaxies
    );
    event.save()
    res.status(201).redirect('/calendar');
  },

    Index: function(req, res) {
      pool.connect()
      return pool.query('SELECT nickname, usercolor, eventname, startdate, description FROM events JOIN users ON eventuser=users.id;').then(function(result) {
      var event = result.rows                       
      console.log(event)
      var eventname = event.eventname
       var eventdate = event.startdate.toLocaleDateString('en-GB')
       console.log(eventdate)
      var usercolor = event.usercolor
      res.render('events/index', { event: event, eventname: eventname, description: event.description, color: usercolor } );
    });
    }
}
    
module.exports = EventsController;
