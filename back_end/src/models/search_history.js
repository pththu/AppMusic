const { DataTypes } = require('sequelize')
const sequelize = require('./init')

const SearchHistory = sequelize.define(
  'SearchHistory',
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
    keyword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    searchedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    tableName: 'search_histories',
    timestamps: true
  }
)

module.exports = SearchHistory