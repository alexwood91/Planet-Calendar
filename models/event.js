const { Pool } = require('pg')

class Event {
  constructor(eventname, description, startdate, enddate ){
    this.eventname = eventname
    this.description = description
    this.startdate = startdate
    this.enddate = enddate
  }
  save(){
    const pool = new Pool({
      user: 'rosie.waite',
      host: 'localhost',
      database: 'planet',
      password: 'password',
      port: 5432,
    })
    pool.query('INSERT INTO events (eventname, description, startdate, enddate) VALUES ($1, $2, $3, $4)', [this.eventname, this.description, this.startdate, this.enddate])
  }
}

module.exports = Event


