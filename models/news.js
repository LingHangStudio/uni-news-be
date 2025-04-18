const {DataTypes}=require('sequelize')
const sequelize = require('../db/db')

const News=sequelize.define('news',{
    sub: DataTypes.STRING,
    title: DataTypes.STRING,
    time: {
        type: DataTypes.BIGINT,
        allowNull: true,
        comment: '发布时间时间戳（毫秒）',
      },
    data:DataTypes.TEXT,
    href: DataTypes.STRING,
    other: DataTypes.JSON,
},{
    defaultScope: {
      order: [
        ['time', 'DESC'],
      ]
      }
})

module.exports={News}