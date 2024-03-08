const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authenticate = require("../middleware/authenticate");

mongoose.set('strictQuery', true);
dotenv.config({path : './config.env'});

require('../db/conn');
const Detail = require("../model/detailSchema");
// router.get('/home_page',(req,res)=>{
//     res.send('hi from router js serveradmin');
// })



   router.post('/wfaculty',async(req,res) =>{

    // console.log(req.body);
    // res.json({message : req.body});
    // destructuring 
    const {name ,workingpost,instituteid,qualification,department,year,phone ,email } = req.body;

    // console.log(name);
    // console.log(req.body.work);
    // res.send("my router");
    // res.json({message:req.body});

    if(!name||!workingpost||!instituteid||!qualification||!department||!year||!phone||!email){
        return res.status(408).json({error:"please fill all th details"});
    }

   try{
    const facExists = await Detail.findOne({instituteid:instituteid});
    if(facExists){
        return res.status(423).json({error:"user already exist"});
 
    }
   
    else{
         const detail = new Detail({name,workingpost,instituteid,qualification,department,year,phone,email});
      await detail.save();
   
    res.status(201).json({message:"saved successfully"});


   }

    }
    catch(err){
    console.log("error");
   }

//    router.get("/details/get",(req,res)=>{
//     Details.find((err,data)=>{
//         if(err){
//             res.send(500).send(err)
//         }
//         else{
//             res.status(200).send(data);
//         }
//     });
// })
 
}



); 


router.get('/workfa_',(req,res)=>{
    Detail.find((err,data)=>{
      if(err){
        res.status(500).send(err);
      }
      else{
        res.status(200).send(data);
      }
    })
  })

    
module.exports = router;

