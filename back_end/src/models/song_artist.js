const { DataTypes } = require('sequelize')
const sequelize = require('../configs/database')

const SongArtist = sequelize.define(
  'SongArtist',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    songId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    artistId: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  },
  {
    tableName: 'song_artists',
    timestamps: true
  }
)

module.exports = SongArtist