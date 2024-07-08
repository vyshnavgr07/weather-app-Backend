const express=require('express')
const userRouter=express.Router();
const userController=require('../controller/userController')
const verifyToken =require('../middleware/verifyToken')

userRouter.post('/registration',userController.signup)
.post('/login',userController.userLogin)
.get('/weather/current', userController.getCurrentCity)
.get('/weather/forcast',userController.getForcast)
.post('/weather/favorites',verifyToken,userController.favoriteCity)
.get('/weather/favorites',verifyToken,userController.getCity)


  
 
 
module.exports=userRouter;