  
module.exports = {
  development: {
    client: "mysql",
    version: "8.0.22",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "Anson",
      password: 'Anson@12345',
      database: "3100proj",
    },
    debug: true,
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
