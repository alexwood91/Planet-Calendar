const { Pool } = require('pg')
const pool = new Pool({
  user: 'rosie.waite',
  host: 'localhost',
  database: 'planet',
  password: 'password',
  port: 5432
})

class User {
  constructor(firstname, surname, email, password, nickname, dob ){
    this.firstname = firstname
    this.surname = surname
    this.email = email
    this.password = password
    this.nickname = nickname
    this.dob = dob

  }
  save(){
  pool.connect()
    pool.query('INSERT INTO users (firstname, surname, email, password, nickname, dob) VALUES ($1, $2, $3, $4, $5, $6);', [this.firstname, this.surname, this.email, this.password, this.nickname, this.dob])
  }
}

module.exports = User
