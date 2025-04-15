const {DataTypes}=require('sequelize')
const sequelize = require('../db/db')

const News=sequelize.define('news',{
    sub: DataTypes.STRING,
    title: DataTypes.STRING,
    time: DataTypes.JSON,
    data:DataTypes.TEXT,
    href: DataTypes.STRING,
    other: DataTypes.JSON,
})

module.exports={News}