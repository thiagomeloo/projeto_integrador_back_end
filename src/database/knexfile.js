// Update with your config settings.
require('dotenv').config()

module.exports = {

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSOWRD,
      database: process.env.DB_DATABASE
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
