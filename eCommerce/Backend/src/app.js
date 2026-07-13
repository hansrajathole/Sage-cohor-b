

const express = require("express")
const userRouter = require("./routes/user.router")
const connect = require("./db/db")


const app = express()
connect()
app.use(express.json())
app.use(express.urlencoded({extended : true})); 



app.use("/v1/api/users",userRouter)


module.exports = app