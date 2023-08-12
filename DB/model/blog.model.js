import {Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

const BlogModel= sequelize.define('blog',{
   title :{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
    },
   body:{
    type:DataTypes.TEXT,
    allowNull:false
   }
})
 
export default BlogModel;