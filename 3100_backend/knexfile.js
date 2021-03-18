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
      database: '3100_project'
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
  }
}
