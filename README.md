
# 校园新闻后端 API

这是一个使用 Express + PostgreSQL 构建的校园新闻后端 API 服务。

## 功能特性

- 新闻列表获取与分页
- 新闻内容详情查看 
- 新闻分类管理
- 院系新闻分类查询

## 技术栈

- Node.js
- Express
- PostgreSQL 
- Sequelize ORM
- Morgan日志
- CORS跨域支持

## 运行项目


```sh
1. 克隆项目
git clone <项目地址>

2.安装依赖

pnpm install

3.配置环境变量 创建 .env 文件,添加以下配置:

PORT=3000
DB_NAME=<数据库名>
DB_USER=<数据库用户名>
DB_PASSWORD=<数据库密码> 
DB_HOST=<数据库地址>

数据库表结构
News 表结构:

sub: 分类ID
title: 新闻标题
time: 发布时间
data: 新闻内容
href: 原文链接
other: 其他信息(图片等)


目录结构

.
├── app.js            # 应用入口
├── config/           # 配置文件
├── dao/              # 数据访问层
├── handler/          # 业务处理层
├── models/           # 数据模型
└── routes/           # 路由
