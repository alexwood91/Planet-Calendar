const { Pool } = require('pg')
const pool = new Pool({
  user: 'alex.wood',
  host: 'localhost',
  database: 'planet',
  password: 'password',
  port: 5432
})

const sql = "SELECT startdate FROM events"
var Event = require ('../../models/event');

var EventsApi = {
  Index: function(req, res) {
    pool.connect()
    pool.query(sql, function(err, result) {
      if (err) { throw err; }

      res.json({ events: result})
    });
  }
};

module.exports = EventsApi;