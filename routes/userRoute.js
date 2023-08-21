const express = require("express")
const userMiddle = require("../middleware/userMiddle")
const userRoute = express.Router()
const bcrypt = require('bcrypt');
const userModel = require("../models/register");
const loginMiddle = require("../middleware/loginMiddle");
var jwt = require('jsonwebtoken');


userRoute.get("/",(req,res)=>{
    res.send("User Route")
})

userRoute.post("/signup",userMiddle, async(req,res)=>{
    try{
        bcrypt.hash(req.body.password, 10, async(err, hash)=> {
            await userModel.create({...req.body,password:hash})

            res.send("Register Successfully")
        });
    }
    catch(err){
        res.send(err)
    }
})


userRoute.post("/login", loginMiddle, async(req,res)=>{
    try{
         const data = await userModel.findOne(req.body.name)
         
         if(data.email){
            bcrypt.compare(req.body.password, data.password, async(err, result)=> {
                if(result){
                    let token = jwt.sign({userID:data._id}, 'shhhhh');
                    res.json({msg:"Login Successfull", token})
                }
                else{
                    res.send("Invalid Credentials")
                }
            });
         }
         else{  
            res.send("Invalid Credentials")
         }
    }
    catch(err){
        res.send(err)
    }
})


module.exports = userRoute
