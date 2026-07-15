const userModel = require("../models/user.model")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")



const registerController = async (req , res) => {
    try {

        const {username , email , password } =  req.body


        if(!username){
            return res.status(400).json({message : "username is required"})
        }
        if(!email){
            return res.status(400).json({message : "email is required"})
        }
        if(!password){
            return res.status(400).json({message : "password is required"})
        }


        let user = await  userModel.findOne({
            email : email
        })  

        if(user){
             return res.status(400).json({message : "user allready exist"})
        }

        const hashedPass = await bcrypt.hash(password,10)
       

        user = await userModel.create({
            username,
            email,
            password : hashedPass
        })


        delete user.password
        res.status(201).json({message : "user register successfully", user})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "internal server error" , error : error.message})
    }
}




const loginController = async (req , res) => {
    try {

        const { email , password } =  req.body


        if(!email){
            return res.status(400).json({message : "email is required"})
        }
        if(!password){
            return res.status(400).json({message : "password is required"})
        }


        let user = await  userModel.findOne({
            email : email
        })  

        if(!user){
             return res.status(404).json({message : "invalid credential"})
        }
        
        
        const isMatch = await  bcrypt.compare(password , user.password)

        if(!isMatch){
              return res.status(400).json({message : "invalid credential"})
        }


        const token = jwt.sign({
            id : user._id,
            email : user.email
        }, "secret key")

        console.log(token);
        delete user._doc.password

        res.status(200).json({message : "login successfully" ,user , token})


    } catch (error) {
        console.log(error);
        res.status(500).json({message : "internal server error" , error : error.message})
    }
}


module.exports = {
    registerController,
    loginController
}