import BlogModel from "../../../../DB/model/blog.model.js";
import UserModel from "../../../../DB/model/user.model.js";

export const createBlog=async(req,res)=>{
    const{title,body,UserId}=req.body;
    try {
        const user=await UserModel.findByPk(UserId);
        if (!user) {
            return res.json({message:'Error',error:"user not found"});
        }

        const blog=await BlogModel.create({title,body,UserId});
        return res.json({message:'Success',blog});
    } catch (error) {
        return res.json({message:'Catch Error',error:error.stack});
    }
}

//get all blogs

export const getBlogs=async(req,res)=>{
    try {
        const blogs=await BlogModel.findAll(
            {
                include:UserModel
            }
        );
        return res.json({message:'Success',blogs});
    } catch (error) {
        return res.json({message:'Catch Error',error:error.stack});
    }
}

//update Blog
export const updateBlog=async(req,res)=>{
  let  {blogId}=req.params;    
    try {
        const blogCount=await BlogModel.update(req.body,{where:{id:blogId}});
        if(blogCount==0){
          return res.json({message:'Error',error:'blog not found'});
        }
        return res.json({message:'Updated'});
    } catch (error) {
        return res.json({message:'Catch Error',error:error.stack});
    }
}

//delete Blog
export const deleteBlog=async(req,res)=>{
    let  {blogId}=req.params;      
      try {
          const blogCount=await BlogModel.destroy({where:{id:blogId}});
          if(blogCount==0){
            return res.json({message:'Error',error:'blog not found'});
          }
          return res.json({message:'Deleted'});
      } catch (error) {
          return res.json({message:'Catch Error',error:error.stack});
      }
  }
