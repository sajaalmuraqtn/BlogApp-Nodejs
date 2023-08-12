import { Sequelize } from "sequelize";

// create the connection to database

 export const sequelize = new Sequelize('blog app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export const ConnectDb= async(req,res)=>{
    return await sequelize.sync({alter:false}).then(result=>{
        console.log("DB connected");
       // console.log(result);
    }).catch(err=>{
        console.log(`failed to connect with DB ${err}`);
    })
  }

