const express = require("express");

const processorRouter = require("./pcParts/processor");
const storedPcPartsRouter = require("./pcParts/storedPcParts.js");

const router = express.Router();

router.use("/processor", processorRouter);
router.use("/storedPcParts", storedPcPartsRouter);

module.exports = router;
