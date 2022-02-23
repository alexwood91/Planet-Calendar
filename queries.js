const { Pool } = require('pg')
const pool = new Pool({
  user: 'rosie.waite',
  host: 'localhost',
  database: 'planet',
  password: 'password',
  port: 5432,
})

module.exports = pool 