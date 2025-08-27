const { DataTypes } = require('sequelize')
const sequelize = require('../configs/database')

const AlbumSong = sequelize.define(
  'AlbumSong',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    albumId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    songId: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  },
  {
    tableName: 'album_songs',
    timestamps: true
  }
)

module.exports = AlbumSong
