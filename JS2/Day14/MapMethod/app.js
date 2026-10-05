const arr = [1,2,3,4,5]

let ans = arr.map((item, idx) => {
    return item ** 2
    // return Math.sqrt(item)
    // return item ** (1 / 2)
})
console.log(ans);



let arr1 = [1, 2, 3, 4, 5]

let ans1 = arr1.map((item) => {
    return item * 2
})
console.log(ans1);



let arr2 = [2, 3, 4, 5]
let ans2 = arr2.map((item) => {
    return item ** 2
})
console.log(ans2);


let arr3 = ["rahul", "amit", "priya", "neha"]

let ans3 = arr3.map((item) => {
    return item.toUpperCase()
})
console.log(ans3);


let arr4 = ["cat", "elephant", "dog", "tiger"]

let ans4 = arr4.map((item) => {
    return item.length
})
console.log(ans4);


let arr5 = [5, 12, 20, 7]

let ans5 = arr5.map((item) => {
    return item + 10
})
console.log(ans5);


let arr6 = [10, 20, 30, 40]

let ans6 = arr6.map((item) => {
    return item.toString()
})
console.log(ans6);


let arr7 = [500, 800, 1200, 1500]

let ans7 = arr7.map((item) => {
    return item + 100
})
console.log(ans7);

let arr8 = [1000, 500, 2500, 800]

let ans8 = arr8.map((item) => {
    let discount = item *(20 / 100)
    return item - discount
})
console.log(ans8);


let arr9 = [0, 10, 20, 30]

let ans9 = arr9.map((item) => {
    return (item *(9/5) + 32)
})
console.log(ans9);

let arr10 = ["Shubham", "Rahul", "Amit"]

let ans10 = arr10.map((item) => {
    return "Mr. " + item
})
console.log(ans10);


let arr11 = [2, 4, 6, 8]
let ans11 = arr11.map((item) => {
    let square = item * item
    return {
        number : item, 
        square : square
    }
})
console.log(ans11);


let arr12 = [10, 20, 30, 40]

let ans12 = arr12.map((item , idx) => {
    return item + idx
})
console.log(ans12);

let arr13 = ["Shubham", "Rahul", "Amit"]

let ans13 = arr13.map((item, idx) => {
    return item + "_" + idx
})
console.log(ans13);


let arr14 = ["Aman", "Riya", "Karan"]

let ans14 = arr14.map((item) => {
    return {
        name: item,
        score: 0
    }
})
console.log(ans14);


let arr15 = [100, 500, 1000]

let ans15 = arr15.map((item) => {
    let gst = item * 18 / 100
    return item + gst
})
console.log(ans15);


let arr16 = [
 { id: 1, name: "Rahul", age: 22 },
 { id: 2, name: "Amit", age: 25 },
 { id: 3, name: "Priya", age: 21 }
]

let ans16 = arr16.map((item) => {
    return item.name
})
console.log(ans16);


let arr17 = [
 { name: "Laptop", price: 50000, quantity: 2 },
 { name: "Mouse", price: 1000, quantity: 3 },
 { name: "Keyboard", price: 2000, quantity: 1 }
]

let ans17 = arr17.map ((item) => {
    let final = item.price * item.quantity
    return final
})
console.log(ans17);


let arr18 = [
 { firstName: "Rahul", lastName: "Sharma" },
 { firstName: "Amit", lastName: "Verma" },
 { firstName: "Priya", lastName: "Singh" }
]

let ans18 = arr18.map((item) => {
    let full = item.firstName + " " + item.lastName
    return full
})
console.log(ans18);


let arr19 = [
 { name: "Laptop", price: 50000, category: "Electronics" },
 { name: "Phone", price: 30000, category: "Electronics" },
 { name: "Shoes", price: 5000, category: "Fashion" }
]

let ans19 = arr19.map((item) => {
    let disc = item.price * 10 / 100
    return { name :item.name, price : disc
    }
})
console.log(ans19);



let arr20 = ["Rahul", "Amit", "Priya", "Karan"]

let ans20 = arr20.map((item, idx) => {
    return {
        name : item,
        rank : idx + 1
    }
})
console.log(ans20);