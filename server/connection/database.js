const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
    dialectModule: require("pg"),
  }
);

// Test the connection
db.authenticate()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Connection error:", err));

module.exports = db;
