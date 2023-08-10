const express=require('express');

const userController=require('./Controller/user.controller.js');
const app=express();


app.get('/users',userController.userPage);

module.exports=app;