const { Pool } = require('pg')
const pool = new Pool({

  user: 'alex.wood',
  host: 'localhost',
  database: 'planet',
  password: 'password',
  port: 5432
})


var EventsApi = {
  Index: function(req, res) {
    const sql = `SELECT startdate FROM events WHERE eventuser = '${req.session.user.id}'`
    pool.connect()
    pool.query(sql, function(err, result) {
      if (err) { throw err; }
      res.json({ events: result, usercolor: req.session.user.usercolor })
    });
  },
};

module.exports = EventsApi;