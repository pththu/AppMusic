const { DataTypes } = require('sequelize')
const sequelize = require('./init')

const Rating = sequelize.define(
  'Rating',
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
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'ratings',
    timestamps: true
  }
)

module.exports = Rating