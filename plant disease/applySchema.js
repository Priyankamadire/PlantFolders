const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer  = require('multer');
// const { files } = require('lite-server/lib/config-defaults');
const upload = multer()
const applySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    postavailable:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    }

    
    
})



const Apply = mongoose.model('APPLY',applySchema);
module.exports = Apply;
