const express = require("express");

const { createProcessor } = require("../../controllers/pcParts/processor");

const router = express.Router();

router.post("/createProcessor", createProcessor);

module.exports = router;
