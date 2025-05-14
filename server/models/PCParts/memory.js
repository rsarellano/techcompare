const express = require("express");

const { Sequelize, DataTypes, STRING } = require("sequelize");
const db = require("../../connection/database");

const Memory = db.define("Memory", {
  _id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
});
