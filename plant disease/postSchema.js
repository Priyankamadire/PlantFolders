const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const { files } = require('lite-server/lib/config-defaults');

const postSchema = new mongoose.Schema({
    instname:{
        type:String,
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
    
   date:{
        type:Date,
        required:true
   }
    
});





const Postjob = mongoose.model('POSTJOB',postSchema);
module.exports =  Postjob;