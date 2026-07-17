

const express = require("express")
const userRouter = require("./routes/user.router")
const connectDb = require("./db/db")
const cors = require("cors")
const morgan = require("morgan")
const config = require("./config/config")
require("dotenv").config()



const app = express()
connectDb()

console.log(process.env.secret_key);

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true})); 

app.use((req, res, next)=>{
    console.log("application level middleware....");
    next()
})




app.use("/v1/api/users",userRouter)


module.exports = app