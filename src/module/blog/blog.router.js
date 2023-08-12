import * as BlogController from './Controller/blog.controller.js'
import express from 'express'

const app=express();
app.use(express.json());

app.post("/createBlog",BlogController.createBlog);
app.get("/allBlogs",BlogController.getBlogs);
app.patch("/updateBlog/:blogId",BlogController.updateBlog);
app.delete("/deleteBlog/:blogId",BlogController.deleteBlog);



export default app;