

const express = require("express")
const userModel = require("../models/user.model")
const userControllers = require("../controllers/user.controller")
const protectedRoute = require("../middleware/protected.middleware")
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const router = express.Router()
//     port                  baseURL      Routes
// http://localhost:8080  /v1/api/users  /register



// router level middleware
// router.use((req, res, next)=>{
//     console.log("router level middleware...");
//     next()
// })


router.post("/register", userControllers.registerController)
router.post("/login", userControllers.loginController)
router.get("/profile", protectedRoute,  userControllers.profileController)
router.put("/update/:userId",protectedRoute ,upload.single("avatar") , userControllers.updateController)


module.exports = router