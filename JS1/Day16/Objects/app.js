// let obj = {
//     name :"shubham",
//     age : 20,
//     ispresent : true,
//     address : {
//         city : "Delhi",
//         country : "India"
//     },
//     colors : ["Red", "Green", "Blue"],
//     sayhi : () =>{
//         console.log("hello")
//     }

// }

// console.log(obj["name"])
// console.log(obj["address"]["city"]);
// console.log(obj["colors"][2]);
// obj["sayhi"]()

// const {age, name, ispresent} = obj
// console.log(name, age, ispresent);



// console.log(obj);
// console.log(obj.name);
// console.log(obj.ispresent);
// console.log(obj.address.city);
// console.log(obj.address.country);
// obj.sayhi();



// let obj = {
//     model : "version0",
//     color : "red"
// }

// obj.model = "Version1"
// obj.color = "Green"

// console.log(obj);


// let obj = {
//     name :"shubham",
//     age : 20,
//     ispresent : true,
//     address : {
//         city : "Delhi",
//         country : "India"
//     },
//     colors : ["Red", "Green", "Blue"],
//     sayhi : () =>{
//         console.log("hello")
//     }

// }

// for (let item in obj) {
//     console.log(item, obj[item]);
// }


let score = 10;
let match = 20;
let win = true
let obj = {score, matchnumber : match, win}
console.log(obj);

delete obj.score

console.log(obj);