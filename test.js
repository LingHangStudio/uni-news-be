const sequelize=require('./config/db')
const {News}=require('./models/news')
const test=async()=>{
    try{
        await sequelize.authenticate()
        console.log('connected!')
        
    }
    catch(e){
        console.error('error',e)
    }
}
const getNewsCount = async (sub) => {
    try {
      const count = await News.count({
        where: { sub:'X_10_1' },
      });
      return count;
    } catch (error) {
      console.error('Error fetching news count:', error);
      throw error;
    }
  };
  
test()
getNewsCount().then(data=>{
    console.log(data)
})