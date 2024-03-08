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
const Retaire = require("../model/retairSchema");
// router.get('/home_page',(req,res)=>{
//     res.send('hi from router js serveradmin');
// })



   router.post('/rfaculty',async(req,res) =>{

    // console.log(req.body);
    // res.json({message : req.body});
    // destructuring 
    const {name ,workedpost,instituteid,qualification,department,retairedyear,phone ,email } = req.body;

    // console.log(name);
    // console.log(req.body.work);
    // res.send("my router");
    // res.json({message:req.body});

    if(!name||!workedpost||!instituteid||!qualification||!department||!retairedyear||!phone||!email){
        return res.status(408).json({error:"please fill all th details"});
    }

   try{
    const facExists = await Retaire.findOne({instituteid:instituteid});
    if(facExists){
        return res.status(423).json({error:"user already exist"});
 
    }
   
    else{
         const retaire = new Retaire({name,workedpost,instituteid,qualification,department,retairedyear,phone,email});
      await retaire.save();
   
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

router.get('/retfa_',authenticate,(req,res)=>{
    Retaire.find((err,data)=>{
      if(err){
        res.status(500).send(err);
      }
      else{
        res.status(200).send(data);
      }
    })
  })


    
module.exports = router;

