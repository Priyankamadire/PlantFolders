const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const { files } = require('lite-server/lib/config-defaults');

const detailSchema = new mongoose.Schema({
    snum:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
   

    diseaseoccur:{
        type:String,
        required:true
    },
    cause:{
        type:String,
        required:true
    },
    recovery:{
        type:String,
        required:true
    }
    
  
    
    
});





const Detail = mongoose.model('DETAIL',detailSchema);
module.exports =  Detail;
