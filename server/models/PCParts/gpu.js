const { Sequelize, DataTypes } = require("sequelize");
const db = require("../../connection/database");

const GPU = db.define("GPU", {
  _id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },

  vram: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fp32: {
    type: DataTypes.FLOAT,
  },
  memoryBandwidth: {
    type: DataTypes.INTEGER,
  },
  clockSpeed: {
    type: DataTypes.INTEGER,
  },
});
