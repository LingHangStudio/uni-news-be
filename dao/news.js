const {News}=require('../models/news')

const getNewsList=(params)=>{
    const {sub,page,pageSize}=params
    const offset=(page-1)*pageSize
    return new Promise((resolve,reject)=>{
        Promise.all([
            News.findAll({
            raw:true,
            where:{
                sub
            },
            attributes:{
              exclude:['data','createdAt','updatedAt']
            },
            limit:pageSize,
            offset:offset
        }),  
            News.count({
                where:{
                    sub
                }
            })
        ]
    ).then(([news,count])=>{
        resolve({
            count,
            news
        })
    }).catch(e=>{
        console.error('error finding data',e)
        reject(e)
    })
})
}


const getNewsContent=(params)=>{
    const {id}=params
    return new Promise ((resolve,reject)=>{News.findOne({
        raw:true,
        where:{
            id
        }}).then(data=>{
            resolve(data)
        }).catch(e=>{
            console.error('error finding data'+e)
            reject(e)
        })
    })
}

module.exports={
    getNewsContent,
    getNewsList
}
