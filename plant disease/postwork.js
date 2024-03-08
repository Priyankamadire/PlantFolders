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
const Postjob = require("../model/postSchema");
// router.get('/home_page',(req,res)=>{
//     res.send('hi from router js serveradmin');
// })




   router.post('/postjob__',async(req,res) =>{

    // console.log(req.body);
    // res.json({message : req.body});
    // destructuring 
    const {instname,postavailable,qualification,experience,department,date} = req.body;

    // console.log(name);
    // console.log(req.body.work);
    // res.send("my router");
    // res.json({message:req.body});

    if(!instname||!postavailable||!qualification||!experience||!department||!date){
        return res.status(408).json({error:"please fill all th details"});
    }

   
   
    else{
         const detail = new Postjob({instname,postavailable,qualification,experience,department,date});
      await detail.save();
   
    res.status(201).json({message:"saved successfully"});


   }

    }
    

   



); 





    
module.exports = router;

