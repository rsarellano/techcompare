const express = require("express");
const https = require("https");
const cors = require("cors");
require("dotenv").config();

const app = express();
const db = require("./connection/database");
const { Sequelize } = require("sequelize");

const mainRoute = require("./routes/mainRoute");
app.use(express.json());
app.use("/api/v1", mainRoute);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await db.authenticate();
    console.log(" Database connected successfully");

    await db.sync();

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start Server", error);
    process.exit(1);
  }
};

startServer();

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ success: false, message: "Internal server error" });
});
