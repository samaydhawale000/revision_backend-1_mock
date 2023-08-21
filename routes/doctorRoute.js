const express = require("express")
const userMiddle = require("../middleware/userMiddle")
const doctorRoute = express.Router()

const DoctorModel = require("../models/doctor");
const authCheck = require("../middleware/authCheck");


doctorRoute.get("/",(req,res)=>{
    res.send("Doctor Route")
})

doctorRoute.post("/appointments",authCheck, async(req,res)=>{
    
    try{
       await DoctorModel.create(req.body)
       res.send("appointments created Successfully")
    }
    catch(err){
        res.send(err)
    }
})


doctorRoute.get("/appointments/data",authCheck, async(req,res)=>{
    
    try{
        if(req.query.specialization){
            
            const data =  await DoctorModel.find({specialization:req.query.specialization})
            res.json({msg:"All data", data})
        }
        else if(req.query.sort){
            const data =  await DoctorModel.find().sort({date:req.query.sort})
            res.json({msg:"All data", data})
        }
        else{
            const data =  await DoctorModel.find()
            res.json({msg:"All data", data})

        }
      
    }
    catch(err){
        res.send(err)
    }
})


doctorRoute.delete("/appointments/delete", async(req,res)=>{
    
    try{
         await DoctorModel.deleteOne({_id:req.body._id})
        res.json({msg:"Data Deleted"})
    }
    catch(err){
        res.send(err)
    }
})

module.exports= doctorRoute
