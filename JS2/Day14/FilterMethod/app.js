let arr = [34, 28, 90, -10, 11]

const ans = arr.filter((item) => {
    // return true
    // return false
    
    return item % 2 == 0
})
console.log(ans);

let arr1 = [1, 2, 3, 4, 5, 6]

let ans1 = arr1.filter((item) => {
    return item % 2 == 0
})
console.log(ans1);


let arr2 = [10, 15, 20, 25, 30, 35]

let ans2 = arr2.filter((item) => {
    return item % 2 !== 0
})
console.log(ans2);

let arr3 = [5, 12, 8, 20, 3, 15]

let ans3 = arr3.filter((item) => {
    return item > 10
})
console.log(ans3);


let arr4 = [10, 55, 23, 78, 45, 90]

let ans4 = arr4.filter((item) => {
    return item < 50
})
console.log(ans4);

let arr5 = [-5, 10, -2, 8, 0, -7, 15]

let ans5 = arr5.filter((item) => {
    return item > 0
})
console.log(ans5);

let arr6 = [-10, 5, -3, 8, -7, 12]

let ans6 = arr6.filter((item) => {
    return item < 0
})
console.log(ans6);

let arr7 = [10, 12, 15, 22, 25, 31, 40]

let ans7 = arr7.filter((item) => {
    return item % 5 == 0
})
console.log(ans7);

let arr8 = [10, 20, 25, 50, 55, 40, 70]

let ans8 = arr8.filter((item) => {
    return item >= 20 && item <= 50
})
console.log(ans8);

let arr9 = [50, 100, 150, 75, 200, 99]

let ans9 = arr9.filter((item) => {
    return item >= 100
})
console.log(ans9);

let arr10 = [5, 25, 100, 999, 42, 1000]

let ans10 = arr10.filter((item) => {
    return item >= 100
})
console.log(ans10);

let arr11 = ["cat", "elephant", "dog", "computer", "sun", "javascript"]

let ans11 = arr11.filter((item) => {
    return item.length > 5
})
console.log(ans11);

let arr12 = ["Apple", "Banana", "Avocado", "Mango", "Ant", "Orange"]

let ans12 = arr12.filter((item) => {
    return item.startsWith("A")
})
console.log(ans12);

let arr13 = ["cats", "dog", "books", "pen", "cars", "table"]

let ans13 = arr13.filter((item) => {
    return item.endsWith("s")
})
console.log(ans13);

let arr14 = ["cat", "book", "tree", "apple", "fish", "sun"]

let ans14 = arr14.filter((item) => {
    return item.length == 4
})
console.log(ans14);

let arr15 = ["Aman", "Rahul", "Isha", "Karan", "Om", "Neha"]

let ans15 = arr15.filter((item) => {
    return item.startsWith("A") || item.startsWith("E") || item.startsWith("I") || item.startsWith("O") || item.startsWith("U")
})
console.log(ans15);

let arr16 = ["javascript", "python", "js", "typescript", "java", "nodejs"]

let ans16 = arr16.filter((item) => {
    return item.includes("j") && item.includes("s")
})
console.log(ans16);

let arr17 = ["madam", "hello", "level", "world", "radar"]

let ans17 = arr17.filter((item) => {
    return item === item.split("").reverse().join("")
})
console.log(ans17);

let arr18 = ["apple", "education", "sky", "javascript", "cat"]

let ans18 = arr18.filter((item) => { 
    return item.split("").filter((ch) => "aeiou".includes(ch)).length >= 3
})
console.log(ans18);

let arr19 = ["rahul@gmail.com", "aman@yahoo.com", "neha@gmail.com", "rohit@outlook.com"]

let ans19 = arr19.filter((item) => {
    return item.endsWith("gmail.com")
})
console.log(ans19);

let arr20 = ["hello", "abc123", "world", "test45", "javascript"]

let ans20 = arr20.filter((item) => {
    let n = 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9
    return item.includes(n)
})
console.log(ans20);


let arr21 = [
 { name: "Aman", marks: 80 },
 { name: "Rahul", marks: 35 },
 { name: "Neha", marks: 72 },
 { name: "Riya", marks: 28 }
]


let ans21 = arr21.filter((item) => {
    return item.marks > 40
})
console.log(ans21);


let arr22 = [
 { name: "Aman", marks: 85 },
 { name: "Rahul", marks: 65 },
 { name: "Neha", marks: 92 },
 { name: "Riya", marks: 78 }
]

let ans22 = arr22.filter((item) => {
    return item.marks > 80
})

console.log(ans22);



let arr23 = [
 { name: "Aman", age: 17 },
 { name: "Rahul", age: 22 },
 { name: "Neha", age: 19 },
 { name: "Riya", age: 15 }
]


let ans23 = arr23.filter((item) => {
    return item.age > 18
})
console.log(ans23);

let arr24 = [
 { name: "Mouse", price: 800 },
 { name: "Keyboard", price: 1500 },
 { name: "Cable", price: 400 },
 { name: "Headphones", price: 2000 }
]

let ans24 = arr24.filter((item) => {
    return item.price < 1000
})
console.log(ans24);


let arr25 = [
 { name: "A", salary: 45000 },
 { name: "B", salary: 60000 },
 { name: "C", salary: 75000 },
 { name: "D", salary: 40000 }
]

let ans25 = arr25.filter((item) => {
    return item.salary > 50000
})
console.log(ans25);


let arr26 = [
 { name: "Aman", active: true },
 { name: "Rahul", active: false },
 { name: "Neha", active: true },
 { name: "Riya", active: false }
]


let ans26 = arr26.filter((item) => {
    return item.active == true
})
console.log(ans26);


let arr27 = [
 { name: "Laptop", stock: 5 },
 { name: "Mouse", stock: 0 },
 { name: "Keyboard", stock: 10 },
 { name: "Monitor", stock: 0 }
]

let ans27 = arr27.filter((item) => {
    return item.stock > 0
})
console.log(ans27);


let arr28 = [
 { name: "Aman", gender: "male" },
 { name: "Neha", gender: "female" },
 { name: "Rahul", gender: "male" },
 { name: "Riya", gender: "female" }
]

let ans28 = arr28.filter((item) => {
    return item.gender == "male"
})
console.log(ans28);


let arr29 = [
 { name: "A", department: "IT" },
 { name: "B", department: "HR" },
 { name: "C", department: "IT" },
 { name: "D", department: "Finance" }
]


let ans29 = arr29.filter((item) => {
    return item.department == "IT"
})
console.log(ans29);


let arr30 = [
 { title: "Login API", status: "completed" },
 { title: "Navbar", status: "pending" },
 { title: "Database", status: "completed" },
 { title: "Testing", status: "pending" }
]

let ans30 = arr30.filter((item) => {
    return item.status == "completed"
})
console.log(ans30);


let arr31 = [3, 5, 7, 9, 10, 11, 15, 17, 20, 22]

let ans31 = arr31.filter((item) => {
    return item % 3 == 0 || item % 5 == 0
})
console.log(ans31);


let arr32 = [1, 2, 3, 4, 5, 6, 7, 8]

let ans32 = arr32.filter((item) => {
    return item % 2 !== 0
})
console.log(ans32);


let arr33 = [1, 2, 3, 2, 4, 1, 5, 3]

let ans33 = arr33.filter((item, index) => {
    return arr33.indexOf(item) == index && arr33.lastIndexOf(item) !== index;
})
console.log(ans33);


let arr34 = [1, 2, 3, 2, 4, 1, 5, 3, 6]

let ans34 = arr34.filter((item, index) => {
    return arr34.indexOf(item) === index && arr34.lastIndexOf(item) == index
})
console.log(ans34);


let arr35 = [12, 345, 6789, 5, 100, 1234]


let ans35 = arr35.filter((item) => {
    return String(item).length%2==0
})
console.log(ans35);


let arr36 = [2, 3, 4, 5, 6, 7, 8, 9, 11, 15]

let ans36 = arr36.filter((item) => {
    return item
})
console.log(ans36);


let arr37 = [
 { name: "A", marks: 80, attendance: 90 },
 { name: "B", marks: 85, attendance: 60 },
 { name: "C", marks: 65, attendance: 90 },
 { name: "D", marks: 75, attendance: 80 }
]

let ans37 = arr37.filter((item) => {
    return item.marks >= 70 && item.attendance >= 75
})
console.log(ans37);


let arr38 = [
 { name: "Mouse", price: 400 },
 { name: "Keyboard", price: 1200 },
 { name: "Monitor", price: 5000 },
 { name: "Headphones", price: 1800 },
 { name: "Cable", price: 600 }
]


let ans38 = arr38.filter((item) => {
    return item.price > 500 && item.price < 2000
})
console.log(ans38);

let arr39 = [
 { name: "A", role: "admin", active: true },
 { name: "B", role: "admin", active: false },
 { name: "C", role: "manager", active: true },
 { name: "D", role: "employee", active: true },
 { name: "E", role: "manager", active: false }
]

let ans39 = arr39.filter((item) => {
    return item.active == true && (item.role == "admin" || item.role == "manager")
})
console.log(ans39);


let arr40 = [
 { name: "Laptop", price: 4500, rating: 4.5, stock: 5 },
 { name: "Phone", price: 3000, rating: 3.8, stock: 10 },
 { name: "Monitor", price: 6000, rating: 4.5, stock: 2 },
 { name: "Keyboard", price: 1500, rating: 4.2, stock: 0 },
 { name: "Mouse", price: 800, rating: 4.5, stock: 20 }
]

let ans40 = arr40.filter((item) => {
    return item.price < 5000 && item.rating >= 4 && item.stock > 0
})
console.log(ans40);