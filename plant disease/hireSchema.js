const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const hireSchema = new mongoose.Schema({
    instname:{
        type:String,
        required:true
    },
   
    workingpost:{
        type:String,
        required:true
    }
    
});





const Hire = mongoose.model('HIRE',hireSchema);
module.exports =  Hire;
