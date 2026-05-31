require("dotenv").config({ path: "../../.env" });
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DATABASE_MYSQL_HOST,
      port: process.env.DATABASE_MYSQL_PORT,
      user: process.env.DATABASE_MYSQL_USER,
      password: process.env.DATABASE_MYSQL_PASSWORD,
      database: process.env.DATABASE_MYSQL_NAME,
    },
    seeds: {
      directory: "../../seeds",
    },
  },
};
