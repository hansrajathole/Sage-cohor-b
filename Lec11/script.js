

// console.log("hello guys");

// setTimeout(()=>{
//     console.log("Heyyy");
    
// },4000)

// setTimeout(()=>{
//     console.log("jaldi bol");
    
// },2000)

// let count = 5
// let time = setInterval(()=>{
//     console.log(count);
//     count--
//     if(count < 0){
//         console.log("Time out!!!!!");
//         clearInterval(time)
//     }
    
// },1000)


// new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         let num = Math.floor(Math.random()*10)

//         if(num>=5){
//             console.log(num);
            
//             resolve("party karte hai challooooo")
//         }else{
//             console.log(num);
            
//             reject("sorry bhaiyooo is bar nhi ho paya")
//         }
//     },2000)
// })
// .then((res)=>{
//     console.log(res);
    
    
// })
// .catch((err)=>{
//     console.log(err);
   
    
// })



// console.log(a);
// var a = 10;
// let x = 20;
// console.log(x);

// //Cannot access 'y' before initialization
// // y is not defined at 
// console.log(y);
// const y = 50;




//  async function dataLeAao() {
//     try {
//            let response = await fetch(" https://api.escuelajs.co/api/v1/users/1")
   
//             let data = await response.json()
//             console.log(data);

//             // Object to JSON
//             let jsonData = `{
//                     "name": "Adeel Solangi",
//                     "language": "Sindhi",
//                     "id": "V59OF92YF627HFY0",
//                     "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
//                     "version": 6.1
//                 }`
            // console.log(jsonData);


            // JSON TO OBJECT
//             console.log(jsonData);
            
//             console.log(JSON.parse(jsonData));
            

            
//     } catch (error) {
//         console.log(error);
        
//     }
   
// }

// dataLeAao()





// function fun() {
//    try {
//          let num = Math.floor(Math.random()*2)+1
//          if(num === 1){
//             console.log(num);
            
//             console.log("everything is ok.....");
            
//          }else{
//             console.log(num);
            
//             throw new Error("dimag fat gya");
            
//          }
    
//    } catch (error) {
//         console.log(error);
        
//    }
// }

// fun()



// localStorage.setItem("name", "krish")
// localStorage.setItem("id", "9832732094")
// localStorage.setItem("city", "bhopal")
// // localStorage.clear()
// localStorage.removeItem("city")



// let id = localStorage.getItem("id")

// console.log(id);
