const express = require('express');
const userRouter = require('./user')
const app = express();

app.use('/user', userRouter)

app.listen(3000, () => {
    console.log('app服务启动')
})