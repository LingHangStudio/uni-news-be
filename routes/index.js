const express=require('express')
const router = express.Router()
const {GetNewsList,GetNewsContent,GetNewsCategories,GetHouseSub }=require('../handler/news')

router.post('/news-categories',(req,res)=>{res.send(GetNewsCategories())})

router.post('/news-list',(req,res)=>{ GetNewsList(req.body).then((data)=>{ res.send(data)}).catch(e=>{console.error(e)})})

router.post('/news-content',(req,res)=>{GetNewsContent(req.body).then((data)=>{res.send(data)}).catch(e=>{console.error(e)})})

router.post('/house-sub',(req,res)=>{res.send(GetHouseSub(req.body))})

module.exports=router