

const express = require("express")
const userModel = require("../models/user.model")
const userControllers = require("../controllers/user.controller")


const router = express.Router()


router.post("/register", userControllers.registerController )
router.post("/login", userControllers.loginController)




module.exports = router