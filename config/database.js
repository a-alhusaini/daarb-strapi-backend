const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DB_HOST", "0.0.0.0"),
      port: env("DB_PORT", 5432),
      database: env("DB_NAME", "daarb_dev"),
      user: env("DB_USER", "smartix"),
      password: env("DB_PASS", "smartix"),
    },
  },
});
