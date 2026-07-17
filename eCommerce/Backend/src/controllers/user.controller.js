const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const imagekit = require("../services/imagekit.service");
const { toFile } = require("@imagekit/nodejs/index.js");




const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username) {
      return res.status(400).json({ message: "username is required" });
    }
    if (!email) {
      return res.status(400).json({ message: "email is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "password is required" });
    }

    let user = await userModel.findOne({
      email: email,
    });

    console.log(user);
    
    if (user){
      return res.status(400).json({ message : "user allready exist" , user});
    }

    const hashedPass = await bcrypt.hash(password, 10);

    user = await userModel.create({
      username,
      email,
      password: hashedPass,
    });


      const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      config.secret_key,
    );

    delete user._doc.password;

    res.status(201).json({ message: "user register successfully", user, token });


    
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "email is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "password is required" });
    }

    let user = await userModel.findOne({
      email: email,
    });

    if (!user) {
      return res.status(404).json({ message: "invalid credential" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "invalid credential" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      config.secret_key,
    );

    // console.log(token);
    delete user._doc.password;

    res.status(200).json({ message: "login successfully", user, token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};

const profileController = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    delete user._doc.password;
    res.status(200).json({ message: "user profile founded", user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};




const updateController = async (req, res) => {
  try {
    const userId = req.params.userId;

    let user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }


    console.log(req.file.buffer);
    
   const response = await imagekit.files.upload({
      file : await toFile( req.file.buffer , req.file.originalname) ,
      fileName : req.file.originalname
    })
    const imageUrl = response.url
    
    user = await  userModel.findByIdAndUpdate(userId , {
      avatar : imageUrl
    })
    

    res.status(200).json({message : "update successfully" , user})
    


  } catch (error) {

    
    console.log(error);
    res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};

module.exports = {
  registerController,
  loginController,
  profileController,
  updateController,
};
