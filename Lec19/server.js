// const http = require("http")

// const server =  http.createServer((req, res)=>{
//         if(req.url === '/'){
//             res.end("Home page")
            
//         }
        
//         if(req.url === "/about"){
//             res.end("About page")
//         }
//     })



//  server.listen(4040)   


const express = require("express")

const app = express()


app.get("/", (req, res)=>{
    res.send("home page")
})




app.get("/about", (req, res)=>{
    res.send("about page")
})
app.get("/contact", (req, res)=>{
    res.send("contact page")
})

app.listen(3000 , ()=>{
    console.log("server started....");
    
})