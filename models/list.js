const { Pool } = require('pg')
const pool = new Pool({
  user: 'rosie.waite',
  host: 'localhost',
  database: 'planet',
  password: 'password',
  port: 5432
})


class List {
  constructor(list)
  list = []
  make(){
    pool.connect()
  var x = pool.query('SELECT startdate FROM events')
  list.push(x)
  }
}
