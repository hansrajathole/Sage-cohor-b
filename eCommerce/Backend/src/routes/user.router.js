

const express = require("express")
const userModel = require("../models/user.model")
const userControllers = require("../controllers/user.controller")


const router = express.Router()
//     port                  baseURL      Routes
// http://localhost:8080  /v1/api/users  /register

router.post("/register", userControllers.registerController)
router.post("/login", userControllers.loginController)




module.exports = router