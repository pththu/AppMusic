const { DataTypes } = require('sequelize')
const sequelize = require('../configs/database')

const PlaylistSong = sequelize.define(
  'PlaylistSong',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    playlistId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    songId: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  },
  {
    tableName: 'playlist_songs',
    timestamps: true
  }
)

module.exports = PlaylistSong
