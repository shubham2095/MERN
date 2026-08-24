// let bank_Account1 = {
//     name: "P1",
//     balance : 50000,
//     mobilenumber : 1234567890
// }

// let bank_Account2 = bank_Account1
// bank_Account2.name = "P2"
// bank_Account2.balance = 100
// bank_Account2.mobilenumber = 9876789876

// console.log(bank_Account1);
// console.log(bank_Account2);


// let arr = [1,2,3,4,5]
// let arr2 = [11,12,14,14,15]

// console.log(...arr);

// const val = [...arr, "Shubham", ...arr2]

// console.log(val);

// let obj = {
//     a : 1,
//     b : 2,
//     c : 3
// }

// let obj2 = {
//     x : 4,
//     y : 5,
//     z : 6,
// }

// let val2 = {
//     ...obj,
//     ...obj2
// }

// console.log(val2);

// let str = "ABCDEFGHIJ"

// console.log(...str);


// let bankAccount1 = {
//     name: "P1",
//     balance : 50000,
//     mobilenumber : 1234567890
// }

// let bankAccount2 = {...bankAccount1}
// bankAccount2.name = "P2"
// bankAccount2.balance = 100
// bankAccount2.mobilenumber = 9876789876

// console.log(bankAccount1);
// console.log(bankAccount2);




// example of Shallow Copy

// let person1 = {
//     name : "Shubham",
//     age : 21,
//     address : {
//         city : "Delhi",
//         country : "India"
//     },
//     cars : ["BMW", "ALTO"]
// }

// let person2 = {...person1}


// person2.name = "A"
// person2.address.city = "HARYANA"
// person2.cars.push("Thar")

// console.log(person1);
// console.log(person2);




// example of deep copy

// let person1 = {
//     name : "Shubham",
//     age : 21,
//     address : {
//         city : "Delhi",
//         country : "India"
//     },
//     cars : ["BMW", "ALTO"]
// }

// let person2 = structuredClone(person1)


// person2.name = "Aditya"
// person2.address.city = "HARYANA"
// person2.cars.push("Thar")

// console.log(person1);
// console.log(person2);



// let arr = [1,2,3,4,5]
// let obj = {
//     name : "S",
//     age : 21,
// }

// let jsonArr = JSON.stringify(arr)
// let orginalarr = JSON.parse(jsonArr)

// let jsonobj = JSON.stringify(obj)
// let orginalObj = JSON.parse(jsonobj)


// console.log(arr);
// console.log(jsonArr);
// console.log(orginalarr);


// console.log(obj);
// console.log(jsonobj);
// console.log(orginalObj.name);



// USE JSON METHOD for cloning

let person1 = {
    name : "Shubham",
    age : 21,
    address : {
        city : "Delhi",
        country : "India"
    },
    cars : ["BMW", "ALTO"]
}

let str = JSON.stringify(person1)
let person2 = JSON.parse(str)


person2.name = "Aditya"
person2.address.city = "HARYANA"
person2.cars.push("Thar")

console.log(person1);
console.log(person2);
