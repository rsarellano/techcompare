const { Op } = require("sequelize");

const GPU = require("../../models/pcParts/gpu");

exports.createGpu = async (req, res, next) => {
  const { name, vram, memoryBandwith, fp32, clockSpeed } = req.body;

  try {
    const gpu = await GPU.create({
      name,
      vram,
      memoryBandwith,
      fp32,
      clockSpeed,
    });

    res.status(201).json({
      success: true,
      message: "GPU created successfully",
      data: gpu,
    });
  } catch (error) {
    next(error);
  }
};
