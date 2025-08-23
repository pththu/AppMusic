const { DataTypes } = require('sequelize')
const sequelize = require('./init')

const Recommend = sequelize.define(
  'Recommend',
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
    reason: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: 'recommends',
    timestamps: true
  }
)

module.exports = Recommend