const { Sequelize } = require("sequelize");
const db = require("../../connection/database");

const Processor = db.define("Processor", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UIDV4,
    allowNull: false,
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Processor;
