const storedPcParts = require("../../models/pcParts/storedPcParts");

exports.createPcParts = async (req, res, next) => {
  const { processor, gpu, motherboard, memory, storage } = req.body;
  const pcParts = await PcParts.create({
    processor,
    gpu,
    motherboard,
    memory,
    storage,
  });
  res.status(201).json({ pcParts });
};

exports.displayPcParts = async (req, res, next) => {
  try {
    const fieldNames = Object.keys(storedPcParts.getAttributes()).filter(
      (key) => key !== "id"
    );

    res.status(200).json({
      success: true,
      fields: fieldNames,
    });
  } catch (error) {
    console.error("Error fetching field names:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching field names",
      error: error.message,
    });
  }
};

exports.updatePcParts = async (req, res, next) => {
  const { processor, gpu, motherboard, memory, storage } = req.body;
  const pcParts = await PcParts.update({
    processor,
    gpu,
    motherboard,
    memory,
    storage,
  });
  res.status(200).json({ pcParts });
};
