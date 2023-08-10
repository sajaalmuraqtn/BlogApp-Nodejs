import  express  from "express";
import  initApp  from "./src/module/app.router.js";
const app =express();
app.use(express.json());

initApp(app,express);

app.listen(4000,()=>{
  console.log('server is running');
});
