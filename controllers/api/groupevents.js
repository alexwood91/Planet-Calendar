const { Pool } = require('pg')
const pool = new Pool({
  user: 'rosie.waite',
  host: 'localhost',
  database: 'planet',
  password: 'password',
  port: 5432
})
var GroupEventsApi = {
  Index: function(req, res) {
    const sql = `SELECT startdate FROM events WHERE eventgalaxies = '${req.session.user.galaxies}'`
    pool.connect()
    pool.query(sql, function(err, result) {
      if (err) { throw err; }
      res.json({ events: result})
    });
  }
};

module.exports = GroupEventsApi;