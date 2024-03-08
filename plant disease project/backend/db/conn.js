const mongoose = require('mongoose');
const DB = process.env.DATABASE;


mongoose.connect(DB,{
    useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false
}).then(()=>{
    console.log('connected');
 })
 .catch((error)=>{
     console.log("not connected");
 })