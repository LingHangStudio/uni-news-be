const fs = require("fs");
const path = require("path");
const { getNewsList, getNewsContent } = require("../dao/news");

const addTimeToNews=(newsArr)=>{
  return newsArr.map(news=>{
    const time=new Date(Number(news.time)).toISOString()
    const timeObj=time.match(/^(\d{4})-(\d{2})-(\d{2})/)
    if(timeObj){
  
        const [_, year, month, day] = timeObj;
        news.time={year,month,day}
    }
    console.log(news)
    return news;
  })
}

const GetNewsList = (params) => {
  const { sub, page, pageSize } = params;
  return new Promise((resolve, reject) => {
    getNewsList(params)
      .then((data) => {
        const newsWithTime=addTimeToNews(data.news);
        const result = {
          newsList: newsWithTime,
          sub,
          page,
          pageSize,
          pageNum: data.count,
        };
        resolve(result);
      })
      .catch((e) => {
        console.error("error finding data") + e;
        reject(e);
      });
  });
};

const GetNewsContent = (params) => {
  const { id } = params;

  return new Promise((resolve, reject) => {
    getNewsContent(params)
      .then((data) => {
        const result = {
          id,
          title: data.title,
          href: data.href,
          date: data.time,
          content: data.data,
          picList: data.other.picList,
        };
        resolve(result);
      })
      .catch((e) => {
        console.error("error finding data") + e;
        reject(e);
      });
  });
};

const GetNewsCategories = () => {
  const filePath = path.join(__dirname, "../config/content/content.json");
  const data = JSON.parse(fs.readFileSync(filePath));
  return data;
};

const GetHouseSub = (params) => {
  const { house } = params;
  const filePath = path.join(__dirname, "../config/content/content.json");
  const data = JSON.parse(fs.readFileSync(filePath));
  const result = data.house
    .map((house) => house.sub)
    .flat()
    .filter((sub) => sub.news.includes(house));
  const obj = { result };
  return obj;
};

module.exports = {
  GetNewsList,
  GetNewsContent,
  GetNewsCategories,
  GetHouseSub,
};
