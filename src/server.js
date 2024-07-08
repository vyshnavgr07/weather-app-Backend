const app= require('./app')
const env =require('dotenv');
env.config({path:'./.env'})
const http=require('http');
const port=process.env.PORT







const Server=http.createServer(app)

Server.listen(port,()=>{
    console.log(`server is running on port${port}`);
})



        


 

