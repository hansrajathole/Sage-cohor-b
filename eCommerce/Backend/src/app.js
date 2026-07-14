

const express = require("express")
const userRouter = require("./routes/user.router")
const connectDb = require("./db/db")
const cors = require("cors")

const app = express()
connectDb()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true})); 



app.use("/v1/api/users",userRouter)


module.exports = app