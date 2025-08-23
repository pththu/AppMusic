const { DataTypes } = require('sequelize')
const sequelize = require('./init')

const FavoriteSong = sequelize.define(
  'FavoriteSong',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    songId: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  },
  {
    tableName: 'favorite_songs',
    timestamps: true
  }
)

module.exports = FavoriteSong
