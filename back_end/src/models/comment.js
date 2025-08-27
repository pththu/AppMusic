// models/comment.js
const { DataTypes } = require('sequelize')
const sequelize = require('../configs/database')


const Comment = sequelize.define(
  'Comment',
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
      allowNull: true
    },
    albumId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    tableName: 'comments',
    timestamps: true
  }
)

module.exports = Comment
