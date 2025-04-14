const { Op } = require("sequelize");

const GPU = require("../../models/pcParts/gpu");

exports.createGpu = async (req, res, next) => {
  const { name, vram, memoryBandwidth, fp32, clockSpeed } = req.body;

  try {
    const gpu = await GPU.create({
      name,
      vram,
      memoryBandwidth,
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

exports.getAllGpu = async (req, res, next) => {
  try {
    const gpu = await GPU.findAll();

    res.status(200).json({
      success: true,
      message: "GPU fetched successfully",
      data: gpu,
    });
  } catch (error) {
    next(error);
  }
};
