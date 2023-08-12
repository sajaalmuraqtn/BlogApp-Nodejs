import UserModel from "../../../../DB/model/user.model.js";

export const getUsers=async(req,res)=>{
    try{
          const users= await UserModel.findAll();
         return res.json({message:'Success',"Users":users});
    }catch(error){
        return res.json({message:'Catch Error',error});
    }
  
}


