const { Pool } = require('pg')
const pool = new Pool({
  user: 'alex.wood',
  host: 'localhost',
  database: 'planet',
  password: 'password',
  port: 5432
})

class User {
  constructor(firstname, surname, email, password, nickname, dob, galaxies ){
    this.firstname = firstname
    this.surname = surname
    this.email = email
    this.password = password
    this.nickname = nickname
    this.dob = dob
    this.galaxies = galaxies
  }
  save(){
  pool.connect()
    pool.query('INSERT INTO users (firstname, surname, email, password, nickname, dob, galaxies) VALUES ($1, $2, $3, $4, $5, $6, $7);', [this.firstname, this.surname, this.email, this.password, this.nickname, this.dob, this.galaxies])
  }

  static find(email){
    pool.connect()
      return pool.query(`SELECT id, email, password, nickname FROM users WHERE email = '${email}';`).then(function(result) {
        return result.rows[0]

      })
  }
}

module.exports = User
