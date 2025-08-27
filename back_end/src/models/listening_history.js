const { DataTypes } = require('sequelize')
const sequelize = require('../configs/database')

const ListeningHistory = sequelize.define(
  'ListeningHistory',
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
    songId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    listenedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    tableName: 'listening_histories',
    timestamps: true
  }
)

module.exports = ListeningHistory