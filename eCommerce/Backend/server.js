const app = require("./src/app")

// 3000 /  8080
const PORT = 8080;


app.listen(PORT, ()=>{
    console.log(`server started on port no ${PORT}`);
    
})