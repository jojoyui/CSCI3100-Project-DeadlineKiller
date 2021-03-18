// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    version: "8.0.22",
    connection: {
      host:     'localhost',
      port:     3306,
      user:     'root',
      password: '08ce267f',
      database: '3100proj'
    }

  },

  staging: {
    client: 'mysql',
    connection: {
      host:     'localhost',
      user:     'root',
      password: '08ce267f',
      database: '3100_project'
    },

    // client: 'postgresql',
    // connection: {
    //   database: 'my_db',
    //   user:     'username',
    //   password: 'password'
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    
    client: 'mysql',
    connection: {
      host:     'localhost',
      user:     'root',
      password: '08ce267f',
      database: '3100_project'
    },
    
    /*
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    */
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
