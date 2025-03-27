const { Sequelize, DataTypes, STRING } = require("sequelize");
const db = require("../../connection/database");

const Processor = db.define("Processor", {
  _id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  generation: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cores: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  threads: {
    type: DataTypes.FLOAT,
    allownull: false,
  },

  clockSpeed: {
    type: DataTypes.FLOAT,
    allownull: false,
  },

  TDP: {
    type: DataTypes.STRING,
    allownull: false,
  },
  memorySupport: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  socket: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  performance: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

module.exports = Processor;
