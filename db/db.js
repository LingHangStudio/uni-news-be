const {Sequelize}=require('sequelize')
const fs=require('fs');
const path=require('path')
const config=JSON.parse(fs.readFileSync(path.join(__dirname,'../config/database/database.json'),'utf-8'))
const sequelize=new Sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect:config.dialect,
    port:config.port,
    logging:false
})

module.exports=sequelize