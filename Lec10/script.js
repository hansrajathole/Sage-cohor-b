

// let arr = [10,20,30,40,50]


// let returnVal = arr.forEach((elem , idx)=>{
//     console.log(elem +'===>' +idx);

// })

// console.log(returnVal);


// let userData = {
//     "fisrt Name" : "raj",
//     lName : "gupta",
//     mobile : 49873274,
//     pata : {
//         city :"bhopal",
//         state : "mp",
//         landMark :{
//             pin : 7589435
//         }
//     },
//      fun() {
//         console.log("hello "+ this.lName);
        
//     }
// }

// let copyData = {...userData}
// copyData.lName = "sharma"
// copyData.address.city = "pune"
// copyData.address.state = "mh"

// console.log(copyData);
// console.log(userData);





// // console.log(userData["fisrt Name"]);
// // update
// userData.mobile = 89757435943
// userData.address.city = "indore"

// // Add
// userData.roll_no = 545487

// // delete
// delete userData.mobile

// console.log(userData);


// userData.fun()




// rest operator 

// function print(...numbers) {
//     numbers.forEach((val , idx)=>{
//         console.log(val ,"===>" ,idx);
        
//     })
    
// }

// print(10,20,30,40,50, 60)



// let str = '    hello guylss kese ho      '


// console.log(str);

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.charAt(4));
// console.log(str.indexOf("l"));
// console.log(str.includes('z'));
// console.log(str.slice(0,5));
// console.log(str.split(" "));
// console.log(str.trim());

// console.log(str.replaceAll('e','i'));


// let n = 2.5

// console.log(Math.floor(n)); // 2
// console.log(Math.ceil(n));  // 3
// console.log(Math.max(10,20)); // 20

// console.log(Math.min(25, 50)); // 25


// let val = Math.floor(Math.random()*(50 - 40)+40)
// console.log(val);


// template literals
// let name = "rahul"
// let age = 20
// let greet = `hello rahul your age is ${age}`

// console.log(greet); // hello rahul





// let userData = {
//     "first Name" : "raj",
//     lName : "gupta",
//     mobile : 49873274

// }

// use for only object
// for (const key in userData) {
    
//     // console.log( key ," :  ",userData[`${key}`]);
    
// }



// let arr = [10,20,30,40,50]
// // use for only array
// for (const key of arr) {
//     console.log(key);
    
// }


// object destructuring
// let { lName } = userData

// console.log(name);
// console.log(fName);
// console.log(fName);
// console.log(fName);
// console.log(fName);
// console.log(fName);
// console.log(userData.lName);




// Closures 
// function parent() {
    
//     let a = 10
//     let b = 20

//     function child() {
//         console.log(a+b);
        
//     }

//     return child
// }

// let returnFun = fun()

// returnFun()