const { Pool } = require('pg')
const pool = new Pool({
  user: 'rosie.waite',
  host: 'localhost',
  database: 'planet',
  password: 'password',
  port: 5432
})

const sql = 'SELECT startdate FROM events'

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