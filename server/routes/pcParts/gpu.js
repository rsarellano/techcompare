const express = require("express");

const { createGpu, getAllGpu } = require("../../controllers/pcParts/gpu");

const router = express.Router();

router.post("/createGpu", createGpu);
router.get("/getAllGpu", getAllGpu);

module.exports = router;
