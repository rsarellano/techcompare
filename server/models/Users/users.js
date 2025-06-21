const {Sequelize, DataTypes} = require("sequelizze")
const db = require("../../connection/database")

const Users = db.define("Users", {
    _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },

    user_email: {
        type: DataType.STRING,
       allowNull:false 
    },

    user_passwrd: {
        type: DataTypes.STRING,
        allowNull:false
        
    }
    
})