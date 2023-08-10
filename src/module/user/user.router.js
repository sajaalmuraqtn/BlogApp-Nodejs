import express from 'express'
import * as userController from './Controller/user.controller.js'
const app=express();
app.use(express.json());

app.get('/users',userController.getUsers);


export default app;