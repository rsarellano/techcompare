const express = require("express");

const {
  createPcParts,
  displayPcParts,
  updatePcParts,
} = require("../../controllers/pcParts/storedPcParts");

const router = express.Router();

router.post("/createPcParts", createPcParts);
router.get("/displayPcParts", displayPcParts);
router.put("/updatePcParts", updatePcParts);

module.exports = router;
