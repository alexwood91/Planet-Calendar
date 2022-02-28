const { Pool } = require('pg')
const pool = new Pool({

  user: 'alex.wood',
  host: 'localhost',
  database: 'planet',
  password: 'password',
  port: 5432
})

class Event {
  constructor(eventname, description, startdate, enddate ){
    this.eventname = eventname
    this.description = description
    this.startdate = startdate
    this.enddate = enddate
  }
  save(){
  pool.connect()
    pool.query('INSERT INTO events (eventname, description, startdate, enddate) VALUES ($1, $2, $3, $4);', [this.eventname, this.description, this.startdate, this.enddate])
  }
  list(){
  pool.connect()
  //newList = []
  /*pool.query('SELECT startdate FROM events').then(function(result){
    console.log(result)
  })*/
  //newList.push(x)
  }
}

module.exports = Event


