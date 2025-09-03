const { DataTypes } = require('sequelize')
const sequelize = require('../configs/database')

const Artist = sequelize.define(
  'Artist',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageUrl: {
      type: DataTypes.STRING,
      field: 'image_url'
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
