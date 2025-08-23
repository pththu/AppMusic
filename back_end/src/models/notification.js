const { DataTypes } = require('sequelize')
const sequelize = require('./init')

const Notification = sequelize.define(
  'Notification',
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
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isRead: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    tableName: 'notifications',
    timestamps: true
  }
)

module.exports = Notification