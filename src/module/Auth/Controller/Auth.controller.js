
// for auth functions

import { where } from "sequelize";
import UserModel from "../../../../DB/model/user.model.js";

export const signup= async(req,res)=>{
    let {name,email,password}=req.body;
    try{
        let user=await UserModel.create({userName:name,email:email,password:password});
        return res.json({message:'Success',"User":user});
    }catch(error){
        if(error?.parent?.errno==1062){
            return res.json({message:'error',error:'email already exist'});
        }
        return res.json({message:'Catch Error',error:error.stack});
    }
    }
    //signIn

    export const signIn=async(req,res)=>{
      let {email,password}=req.body;
      try {
         let checkUser=await UserModel.findAll({
         attributes:['id','userName'],
          where:{
              email:email,
              password:password
            }
        }
      )
      if(!checkUser) {
          return res.json({message:'error',error:"email or password incorrect"});
        } 
        
        return res.json({message:'Success',checkUser});
      } catch (error) {
        return res.json({message:'Catch Error',error:error});
      }
     

    }
