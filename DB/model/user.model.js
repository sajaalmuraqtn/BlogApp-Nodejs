import { Sequelize, DataTypes } from 'sequelize';
import {sequelize} from '../connection.js';

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
    unique:true
},
age:{
    type:DataTypes.INTEGER,

},
});

export default UserModel;