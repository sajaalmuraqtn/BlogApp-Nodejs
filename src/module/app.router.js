import { ConnectDb } from '../../DB/connection.js'
import AuthRouter from './Auth/Auth.router.js'
import BlogRouter from './blog/blog.router.js'
import UserRouter from './user/user.router.js'

const initApp=(app,express)=>{
    
    app.use(express.json());
     ConnectDb();
app.use('/',AuthRouter);
app.use('/Blog',BlogRouter);
app.use('/Users',UserRouter);
app.use('*',(req,res)=>{
    res.json({'Error':"Page Not Found"});
})
}

export default initApp;