

const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username :{
        type : String,
        required : true,
        
    },
    email : {
        type : String,
        unique: true,
        required : true,
    },
    password :{
        type : String,
        required : true
    },
    avatar : {
        type : String,
        default : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
    }
})


const userModel = mongoose.model("User", userSchema)
module.exports = userModel