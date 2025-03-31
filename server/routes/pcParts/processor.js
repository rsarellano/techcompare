const express = require("express");

const {
  createProcessor,
  getAllProcessors,
} = require("../../controllers/pcParts/processor");

const router = express.Router();

router.post("/createProcessor", createProcessor);
router.get("/getAllProcessors", getAllProcessors);

module.exports = router;
