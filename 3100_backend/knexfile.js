module.exports = {
    development: {
      client: "mysql",
      version: "8.0.12",
      connection: {
        host: "127.0.0.1",
        port: 3306,
        user: "OMG",
        password: '1234567',
        database: "3100proj",
      },
      debug: true,
      migrations: {
        tableName: "knex_migrations",
      },
    },
  };
