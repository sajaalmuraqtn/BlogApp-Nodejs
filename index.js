const express = require('express');
const app = express();
const userRouter=require('./src/module/user/user.router.js');
const connectDb=require('./DB/connection.js');

app.use(express.json());
connectDb();

app.use('/users',userRouter);

app.listen(4000,()=>{
  console.log('server is running');
});
