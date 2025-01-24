const {DataTypes}=require('sequelize')
const sequelize = require('../config/db')

const News=sequelize.define('News',{
    sub: DataTypes.STRING,
    title: DataTypes.STRING,
    time: DataTypes.JSON,
    data:DataTypes.TEXT,
    href: DataTypes.STRING,
    other: DataTypes.JSON,
})

module.exports={News}