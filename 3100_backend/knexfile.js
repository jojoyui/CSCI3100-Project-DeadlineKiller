module.exports = {
    development: {
      client: "mysql",
      version: "8.0.22",
      connection: {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: '08ce267f',
        database: "3100_project"
      },
      debug: true,
      migrations: {
        tableName: "knex_migrations",
      },
    },
  };
