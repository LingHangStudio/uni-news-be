const express = require('express')
const app=express()
const sequelize = require('./config/db')
const newsRouter=require('./routes/index')
const morgan=require('morgan')
const cors=require('cors')

const port=3000

app.use(cors())
app.use(morgan(':method :status'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.get('/',(req,res)=>{
    res.json('hello world')
})

app.use('/api',newsRouter)

sequelize.sync().then(()=>{
    console.log('database synchronized')
    app.listen(port,()=>{
        console.log(`Server running at http://127.0.0.1:${port}`)
    })
}).catch(err=>{
    console.error('Error synchronizing database:', err)
})
//
