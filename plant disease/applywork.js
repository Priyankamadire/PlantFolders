const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const multer  = require('multer')
const upload = multer()
mongoose.set('strictQuery', true);
dotenv.config({path : './config.env'});

require('../db/conn');
const Apply  = require("../model/applySchema");
// router.get('/home_page',(req,res)=>{
//     res.send('hi from router js serveradmin');
// })




   router.post('/applypost' , async(req,res) =>{
   

    // console.log(req.body);
    // res.json({message : req.body});
    // destructuring 
    const {name,date,email,phone,postavailable,qualification,experience, department ,github} = req.body;

    // console.log(name);
    // console.log(req.body.work);
    // res.send("my router");
    // res.json({message:req.body});

    if(!name||!date||!email||!phone||!postavailable||!qualification||!experience||!department ||!github){
        return res.status(408).json({error:"please fill all th details"});
    }
   
    else{
         const detail = new Apply({name,date,email,phone,postavailable,qualification,experience,department,github});
      await detail.save();
   
    res.status(201).json({message:"saved successfully"});


   }

    
   


 
}



); 
router.get('/jobapply_',(req,res)=>{
    Apply.find((err,data)=>{
      if(err){
        res.status(500).send(err);
      }
      else{
        res.status(200).send(data);
      }
    })
  })




    
module.exports = router;

