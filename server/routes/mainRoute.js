const express = require("express");

const processorRouter = require("./pcParts/processor");

const router = express.Router();

router.use("/processor", processorRouter);

module.exports = router;
