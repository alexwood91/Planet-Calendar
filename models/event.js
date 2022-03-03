const { Pool } = require('pg')
const pool = new Pool({
  user: 'jackie.benn',
  host: 'localhost',
  database: 'planet',
  password: 'password',
  port: 5432
})

class Event {
  constructor(eventname, description, startdate, enddate, privateevent, eventuser){
    this.eventname = eventname
    this.description = description
    this.startdate = startdate
    this.enddate = enddate
    this.privateevent = privateevent
    this.eventuser = eventuser
  }
  save(){
  pool.connect()
    pool.query('INSERT INTO events (eventname, description, startdate, enddate, private, eventuser ) VALUES ($1, $2, $3, $4, $5, $6);', [this.eventname, this.description, this.startdate, this.enddate, this.privateevent, this.eventuser])
  }
  list(){
  pool.connect()
  }

  static all(){
    pool.connect()
      return pool.query('SELECT * FROM events;').then(function(result) {
        return result
      })
      }
}

module.exports = Event


