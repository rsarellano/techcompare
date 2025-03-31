const { Op } = require("sequelize");

const Processor = require("../../models/pcParts/processor");

exports.createProcessor = async (req, res, next) => {
  const {
    brand,
    name,
    generation,
    cores,
    threads,
    clockSpeed,
    TDP,
    memorySupport,
    socket,
    price,
  } = req.body;

  try {
    const processor = await Processor.create({
      brand,
      name,
      generation,
      cores,
      threads,
      clockSpeed,
      TDP,
      memorySupport,
      socket,
      price,
    });

    res.status(201).json({
      success: true,
      message: "Processor created successfully",
      data: processor,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllProcessors = async (req, res, next) => {
  try {
    const processors = await Processor.findAll();

    res.status(200).json({
      success: true,
      message: "Processors fetched successfully",
      data: processors,
    });
  } catch (error) {
    next(error);
  }
};
