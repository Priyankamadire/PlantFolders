const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cookie = require('cookie-parser');
mongoose.set('strictQuery', true);
dotenv.config({path : './config.env'});

require('../db/conn');
const Posttweet = require("../model/postSchema");
// router.get('/home_page',(req,res)=>{
//     res.send('hi from router js serveradmin');
// })




   router.post('/posttweet__',async(req,res) =>{

    // console.log(req.body);
    // res.json({message : req.body});
    // destructuring 
    const {resname,qualification,experience,disease,explanation} = req.body;

    // console.log(name);
    // console.log(req.body.work);
    // res.send("my router");
    // res.json({message:req.body});

    if(!resname||!qualification||!experience||!disease||!explanation){
        return res.status(408).json({error:"please fill all th details"});
    }

   
   
    else{
         const detail = new Posttweet({resname,qualification,experience,disease,explanation});
      await detail.save();
   
    res.status(201).json({message:"saved successfully"});


   }

    }
    

   



); 





    
module.exports = router;

