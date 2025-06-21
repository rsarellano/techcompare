const {Sequelize, DataTypes} = require("sequelizze")
const db = require("../../connection/database")

const Users = db.define("Users", {
    _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    }
})