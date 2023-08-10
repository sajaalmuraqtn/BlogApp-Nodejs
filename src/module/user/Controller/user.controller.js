const connection = require("../../../../DB/connection");

exports.userPage=(req,res)=>{
    let sql=`select * from users`;
   connection.execute(sql,(err,result)=>{
    if(err){
        return res.json({
            message:"error",err
        });
    }   
     return res.json({
        message:"Success",result
    });
   });
   

}


