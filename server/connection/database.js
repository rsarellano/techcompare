const sequelize = require("sequelize");

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;
const host = process.env.DB_HOST;
const PORT = process.env.DB_PORT;

const db = new sequelize.Sequelize(dbName, user, pass, {
  dialect: "postgres",
  host: host,
  logging: false,
  dialectModule: require("pg"),
});

module.exports = db;
