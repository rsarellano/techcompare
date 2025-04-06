const { Sequelize, DataTypes, STRING } = require("sequelize");
const db = require("../../connection/database");

const storedPcParts = db.define("storedPcParts", {
  _id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },

  processor: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  gpu: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  motherboard: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  memory: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  storage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = storedPcParts;
