const obj = {
    name : "Shubham",
    age : 21,
    number : 9891508808,
    city : "Delhi",
    country : "India"
}

// for (let item of Object.keys(obj)) {
//     console.log(item);
// }

// for (let item of Object.values(obj)) {
//     console.log(item);
// }

for (let [k,v] of Object.entries(obj)) {
    console.log(k,v);
}



const keys = Object.keys(obj)
const values = Object.values(obj) 
// const entries = Object.entries(obj)


console.log(keys);
console.log(values);
// console.log(entries);


// for (let item of keys) {
//     console.log(item);
// }

// for (let item of values) {
//     console.log(item);
// }

// for(let [k,v] of entries) {
//     console.log(k,v);
// }


