const { DataTypes } = require('sequelize')
const sequelize = require('../configs/database')

const Role = sequelize.define(
  'Role',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    roleVersion: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  },
  {
    tableName: 'roles',
    timestamps: true
  }
)

module.exports = Role