const { Sequelize } = require('sequelize');

// create the connection to database

  const sequelize = new Sequelize('node4', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  const ConnectDb=()=>{
    return sequelize.sync().then(result=>{
        console.log("DB connected");
       // console.log(result);
    }).catch(err=>{
        console.log(`failed to connect with DB ${err}`);
    })
  }

  module.exports=ConnectDb;