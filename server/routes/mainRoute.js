const express = require("express");

const processorRouter = require("./pcParts/processor");
const storedPcPartsRouter = require("./pcParts/storedPcParts.js");
const gpuRouter = require("./pcParts/gpu.js");

const router = express.Router();

router.use("/processor", processorRouter);
router.use("gpu", gpuRouter);
router.use("/storedPcParts", storedPcPartsRouter);

module.exports = router;
