const { DataTypes } = require('sequelize')
const sequelize = require('../configs/database')

const UserRole = sequelize.define(
  'UserRole',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    roleId: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  },
  {
    tableName: 'user_roles',
    timestamps: true
  }
)

module.exports = UserRole
