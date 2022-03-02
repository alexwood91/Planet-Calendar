const { Pool } = require('pg')
const pool = new Pool({
  user: 'rosie.waite',
  host: 'localhost',
  database: 'planet',
  password: 'password',
  port: 5432
})

class Event {
  constructor(eventname, description, startdate, enddate, privateevent, eventuser, eventgalaxies ){
    this.eventname = eventname
    this.description = description
    this.startdate = startdate
    this.enddate = enddate
    this.privateevent = privateevent
    this.eventuser = eventuser
    this.eventgalaxies = eventgalaxies
  }
  save(){
  pool.connect()
    pool.query('INSERT INTO events (eventname, description, startdate, enddate, private, eventuser, eventgalaxies ) VALUES ($1, $2, $3, $4, $5, $6, $7);', [this.eventname, this.description, this.startdate, this.enddate, this.privateevent, this.eventuser, this.eventgalaxies])
  }
  list(){
  pool.connect()
  }
}

module.exports = Event


