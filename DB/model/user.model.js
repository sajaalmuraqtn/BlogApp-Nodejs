import { Sequelize, DataTypes } from 'sequelize';
import {sequelize} from '../connection.js';
import BlogModel from './blog.model.js';

const UserModel=sequelize.define('User',{
userName:{
    type:DataTypes.STRING,
    allowNull:false,
    
},
email:{
    type:DataTypes.STRING(100),
    allowNull:false,
    unique:true
},
password:{
    type:DataTypes.STRING(90),
    allowNull:false
},
confirmEmail:{
    type:DataTypes.BOOLEAN,
    allowNull:false,
    defaultValue:false
    ,unique:false
},
age:{
    type:DataTypes.INTEGER,
},
isAdmin:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
}
});

UserModel.hasMany(BlogModel,
    {
        onDelete:'CASCADE'
    }
    );
 BlogModel.belongsTo(UserModel);



export default UserModel;