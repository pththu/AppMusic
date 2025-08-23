const { DataTypes } = require('sequelize')
const sequelize = require('./init')

const Follow = sequelize.define(
  'Follow',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    followerId: {  // user theo dõi
      type: DataTypes.BIGINT,
      allowNull: false
    },
    followingId: { // user hoặc artist được theo dõi
      type: DataTypes.BIGINT,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('user', 'artist'),
      allowNull: false,
      defaultValue: 'user'
    }
  },
  {
    tableName: 'follows',
    timestamps: true
  }
)

module.exports = Follow
