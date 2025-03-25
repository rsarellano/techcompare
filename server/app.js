const express = require("express");
const https = require("https");
const cors = require("cors");

const app = express();
const db = require("./connection/database");

const PORT = process.env.PORT || 3000;
