const express=require('express')
const app=express();
const cors=require('cors')
const cookieParser=require('cookie-parser')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
const userRouter=require('../src/routes/userRouter')

app.use('/',userRouter) 



module.exports=app    