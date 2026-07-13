

const express = require("express")
const userModel = require("../models/user.model")


const router = express.Router()


router.post("/register", async (req, res)=>{

    console.log(req.query);
    console.log(req.body);

    const {username , password , email} = req.body


    let user = await userModel.create({
        username : username,
        password : password,
        email : email
    })


     res.send("register successfulllyyyyy....", user) 

     
})




module.exports = router