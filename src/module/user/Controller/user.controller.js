import UserModel from "../../../../DB/model/user.model.js";

export const getUsers=async(req,res)=>{
    try{
          const users= await UserModel.findAll();
         return res.json({message:'Success',"Users":users});
    }catch(error){
        return res.json({message:'Catch Error',error});
    }
  
}

//update user

export const updateUser= async(req,res)=>{
   let {id}=req.params;
   try {
    const userCount = await UserModel.update(req.body,{where:{id:id}});
    if (userCount ==0) {
        return res.json({message:'Error',error:"user not found"});
    }
    return res.json({message:"Updated"});
   } catch (error) {
    return res.json({message:'Catch Error',error});
   }
}

// delete user
export const deleteUser=async(req,res)=>{
    try {
        let {id}=req.params;
        const userCount = await UserModel.destroy({where:{id:id}});
        if (userCount ==0) {
            return res.json({message:'Error',error:"user not found"});
        }
        return res.json({message:"Deleted"});

    } catch (error) {
        return res.json({message:'Catch Error',error});        
    }
}

