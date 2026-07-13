

const mongoose = require("mongoose")

const connectDb = ()=>{
    mongoose.connect("mongodb://localhost:27017/Sage-bhopal")
    .then(()=>{
        console.log("database connected successfully");
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}


module.exports = connectDb