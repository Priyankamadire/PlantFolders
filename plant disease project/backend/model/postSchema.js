const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const { files } = require('lite-server/lib/config-defaults');

const postSchema = new mongoose.Schema({
    resname:{
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
    disease:{
        type:String,
        required:true
    },
    
    
    explanation:{
        type:String,
        required:true
    }
    
   
    
});





const Posttweet = mongoose.model('POSTTWEET',postSchema);
module.exports =  Posttweet;