const { DataTypes } = require('sequelize')
const sequelize = require('../configs/database')

const Artist = sequelize.define(
  'Artist',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING
    },
    bio: {
      type: DataTypes.TEXT
    }
  },
  {
    tableName: 'artists',
    timestamps: true
  }
)

module.exports = Artist
