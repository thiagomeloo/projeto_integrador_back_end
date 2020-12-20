// Update with your config settings.
require('dotenv').config()
console.dir(process.env)
module.exports = {

  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSOWRD,
      database: process.env.DB_DATABASE,
      port:process.env.DB_PORT
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
