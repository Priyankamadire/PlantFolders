const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authenticate = require("../middleware/authenticate");
const JWT_SECRET_KEY = "MyKey";
const cookie = require('cookie-parser') 
mongoose.set('strictQuery', true);
dotenv.config({path : './config.env'});

require('../db/conn');
const User = require("../model/userSchema");
const Admin = require('../model/adminSchema');
const Detail = require('../model/detailSchema');
const Postjob = require("../model/postSchema");
const New = require("../model/newworSchema");

router.get('/',(req,res)=>{
    res.send('hi from router js');
})
router.post('/register',async(req,res) =>{

    // destructuring
    const {name , email, phone ,  qualification ,experience, password , cpassword } = req.body;

    // console.log(name);
    // console.log(req.body.work);
    // res.send("my router");
    // res.json({message:req.body});

    if(!name || !email || !phone ||  !qualification || !experience || !password || !cpassword){
        return res.status(428).json({error:"please fill all the details"});
    }


    // User.findOne({email:email}).then((userExist)=>{
    //     if(userExist){
    //     return res.status(422).json({error:"user already exist"});
            
    //     }

    //     const user = new User({name,email,phone,work,password,cpassword});
    //     user.save().then((userRegister)=>{
    //         console.log('${user} registered');
    //         console.log(userRegister);

    //      res.status(201).json({message:"registered successfully"});
            
    //     }).catch((err) => res.status(500).json({error : "Failed to register"}));
    // }).catch(err => {console.log("error")});

   try{
    const userExist = await User.findOne({email:email});
    if(userExist){
        return res.status(488).json({error:"user already exist"});
 
    }
    else if(password != cpassword){
        return res.status(422).json({error:"enter correct password"});
    }
    else{
        const user = new User({name,email,phone,qualification,experience,password,cpassword});
     await user.save();
   
    res.status(201).json({message:"registered successfully"});


   }

    }
    catch(err){
    console.log("error");
   }
 
}); 


router.post('/login',async(req,res)=>{
    try{
        // let token;
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({error:"fill complete data"})
        }
        const userLogin = await User.findOne({email:email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);
             token = await  userLogin.generateAuthToken();
             console.log(token);
            
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+2589200000000),
                httpOnly:true
            });
            // const token = jwt.sign(
            //   {
            //     name: userLogin.name,
            //     email: userLogin.email,
            //   },
            //   'secret123'
            // )
            // const token = jwt.sign({id:existingUser._id},JWT_SECRET_KEY,{
            //   expiresIn: "20hr"
            // });
             if(!isMatch){
                res.status(412).json({message:"invalid passwordtry again "});
            }
            else{ 
            res.json({message:"login successfull"});
           
            }
        }
        else{
            res.status(405).json({message:"invalid details try again "});

        }

    }
    catch(err){
        console.log(err);
    }
}


)


router.get('/about_',authenticate,(req,res)=>{
    console.log("hello my about");
    res.send(req.rootUser);
});

// 

router.get("/list", async (req, res) => {
    // res.send(req.rootUser);

    try {
      let users = await User.find();
      res.status(200).json({
        status: 200,
        data: users,
      });
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    }

    
    // res.send(req.rootUser);

  });
 

// router.get("/jobavai", async (req, res) => {
//     try {
//       let posts = await Postjob.find();
//       res.status(200).json({
//         status: 200,
//         data: posts,
//       });
//     } catch (err) {
//       res.status(400).json({
//         status: 400,
//         message: err.message,
//       });
//     }
//   });




router.get('/jobavai',(req,res)=>{
  Postjob.find((err,data)=>{
    if(err){
      res.status(500).send(err);
    }
    else{
      res.status(200).send(data);
    }
  })
})


// User

router.get('/myprofile',(req,res)=>{
  User.find((err,data)=>{
    if(err){
      res.status(500).send(err);
    }
    else{
      res.status(200).send(data);
    }
  })
}) 




router.get('/lout',(req,res)=>{
  console.log("hello my logout");
  res.clearCookie('jwtoken',{path:'/'})
  res.status(200).send('User logout');
});

module.exports = router;

