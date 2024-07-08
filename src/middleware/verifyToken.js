const express=require('express');
const env=require('dotenv');
env.config({path:'./.env'})
const secret=process.env.SECRET_KEY
const jwt=require('jsonwebtoken')
console.log(secret,"sec")

const tokenVerify=async(req,res,next)=>{
    const authHeader=req.headers.authorization;
  
    if(authHeader===undefined){
     return   res.status(401).json({
            status:'failed',
            message:'no token provided'  
        })
    }
const token=authHeader.split(" ")[1]

    jwt.verify(token,secret,(err,decoded)=>{
     if(err){
        console.log(err,"error")
      return  res.status(401).json({
            status:'failed',
            message:'token not provoded'
        })
     }else{
        req.decoded=decoded;
        next()
     }
    })
    
    }


    module.exports=tokenVerify