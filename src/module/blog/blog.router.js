import * as BlogController from './Controller/blog.controller.js'
import express from 'express'

const app=express();
app.use(express.json());

app.get("/blogs",BlogController.getBlog);



export default app;