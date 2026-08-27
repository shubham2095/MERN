// let arr = [1,2,3,4,1,2,3,4,1,2,3,4,3,2,1]
// let obj = {}

// for(let item of arr) {
//     obj[item] = obj[item] + 1 || 1
// }

// for (let item of arr) {
//     if(obj[item]) {
//        // obj[item]++
//         obj[item] = obj[item] + 1
//     }
//     else{
//         obj[item] = 1
//     }
// }
// console.log(obj);


// let str = "abcdbcabcadbdcab"
// let obj1 ={}

// for (let item of str) {
//     obj1[item] = obj1[item] + 1 || 1
// }

// for (let item of str) {
//     if(obj1[item]) {
//        // obj[item]++
//         obj1[item] = obj1[item] + 1
//     }
//     else{
//         obj1[item] = 1
//     }
// }

// console.log(obj1);


// const students = [
//     {name: "Aman", marks : 85, age: 20},
//     {name: "Riya", marks : 92, age: 19},
//     {name: "Karan", marks : 67, age: 21},
//     {name: "Neha", marks : 78, age: 20},
//     {name: "Rohit", marks : 92, age: 22},
// ];

// function solve(arr) {
//     let sum = 0
//     let passed = []
//     let topper = arr[0]
//     let youngest = arr[0]
//     for (let item of arr) {
//         sum+=item.marks
//         if(item.marks > 70) {
//             passed.push(item.name)
//         }
//         if(item.age < youngest.age) {
//             youngest = item
//         }
//         if (item.marks > topper.marks) {
//             topper = item
//         }
//     }   
//     return {
//         averageMarks : sum / arr.length,
//         youngest : youngest.name,
//         passed,
//         topper : topper.name,
//         totalStudents : arr.length 
//     }
    
// }
// console.log(solve(students));




// 1. Employee Analyzer
// Given an array of employees:

// Write a function analyzeEmployees(employees) that returns an object containing:
// highestPaid — name of the employee with the highest salary
// averageSalary — average salary
// itEmployees — names of employees in the IT department
// youngestEmployee — name of the youngest employee
// totalEmployees — total number of employees

// const employees = [
//   { name: "Aman", salary: 45000, age: 25, department: "IT" },
//   { name: "Riya", salary: 65000, age: 28, department: "HR" },
//   { name: "Karan", salary: 55000, age: 24, department: "IT" },
//   { name: "Neha", salary: 75000, age: 30, department: "Finance" }
// ];

// function ans(arr) {
//     let highest = arr[0]
//     let sum = 0
//     let it = []
//     let total = arr.length
//     let youngest = arr[0]

//     for (let item of arr) {

//         // Caluclate total salary
//         sum += item.salary

//         // find highest salary
//         if (item.salary > highest.salary) {
//             highest = item
//     }
//         // youngest salary is done
//         if (item.age < youngest.age) {
//             youngest = item
//     }
//         // find IT employee
//         if (item.department === "IT") {
//             it.push(item.name)
//     }
//     }
//     return {
//     highestPaid: highest.name,
//     averageSalary: sum / arr.length,
//     itEmployees: it,
//     youngestEmployee: youngest.name,
//     totalEmployees: total
// }
// }
// console.log(ans(employees))


// 2. Product Inventory Analyzer

// Write analyzeProducts(products) that returns:

// mostExpensive — name of the most expensive product
// averagePrice — average product price
// outOfStock — names of products with zero stock
// availableProducts — names of products currently in stock
// totalProducts — total number of products

// const products = [
//   { name: "Laptop", price: 60000, stock: 5, category: "Electronics" },
//   { name: "Phone", price: 30000, stock: 0, category: "Electronics" },
//   { name: "Chair", price: 5000, stock: 12, category: "Furniture" },
//   { name: "Table", price: 10000, stock: 3, category: "Furniture" }
// ];

// function solve(arr) {
//     let expensive = arr[0]
//     let sum = 0
//     let out = []
//     let available = []
//     let total = arr.length


//     for (let item of arr) {

//         // most expensive
//         if (item.price > expensive.price) {
//             expensive = item
//         }

//         // sum
//         sum += item.price

//         // out of stock
//         if (item.stock === 0 ) {
//             out.push(item.name)
//         }

//         //available stock
//         if (item.stock > 0) {
//             available.push(item.name)
//         }
//     }   
//     return {
//         MessagePortexpensive : expensive.name,
//         average : sum / arr.length,
//         outofstock :out,
//         availableproducts : available,
//         totalproducts : total
//     }
// }
// console.log(solve(products))


// 3. Movie Analyzer
// Write analyzeMovies(movies) that returns:

// highestRated — title of the highest-rated movie
// averageRating — average rating
// sciFiMovies — titles of all Sci-Fi movies
// recentMovies — titles of movies released after 2010
// totalMovies — total number of movies

// const movies = [
//   { title: "Inception", rating: 8.8, year: 2010, genre: "Sci-Fi" },
//   { title: "Avatar", rating: 7.8, year: 2009, genre: "Sci-Fi" },
//   { title: "Titanic", rating: 7.9, year: 1997, genre: "Romance" },
//   { title: "Interstellar", rating: 8.7, year: 2014, genre: "Sci-Fi" }
// ];

// function ans(arr) {
//     let highest = arr[0]
//     let sum = 0
//     let sci = []
//     let recent = []
//     let total = arr.length


//     for (let item of arr) {

//         if(item.rating > highest.rating) {
//             highest = item
//         }

//         sum += item.rating

//         if (item.genre === "Sci-Fi") {
//             sci.push(item.title)
//         }

//         if(item.year > 2010) {
//             recent.push(item.title)
//         }
//     }
//     return {
//         highestRated : highest.title,
//         averageRating : sum / arr.length,
//         sciFiMovies : sci,
//         recentMovies : recent,
//         totalMovies : total
//     }
// }
// console.log(ans(movies))


// 4. Shopping Cart Analyzer
// Write analyzeCart(cart) that returns:

// totalItems — total number of physical items
// totalCost — total cost of the cart
// mostExpensiveItem — name of the item with the highest individual price
// bulkItems — names of products whose quantity is greater than 1
// uniqueProducts — number of different products in the cart

// const cart = [
//   { name: "Laptop", price: 60000, quantity: 1 },
//   { name: "Mouse", price: 1000, quantity: 2 },
//   { name: "Keyboard", price: 2000, quantity: 1 },
//   { name: "Monitor", price: 15000, quantity: 2 }
// ];

// function ans(arr) {
//     let count = 0
//     let total = 0
//     let expenisve = arr[0]
//     let bulk = []
//     let unique = arr.length

//     for(let item of arr) {
        
//         if (item.quantity >= 1) {
//             count = count + item.quantity
//         }

//         total += item.price * item.quantity
        
//         if (item.price > expenisve.price) {
//             expenisve = item
//         }

//         if(item.quantity > 1) {
//             bulk.push(item.name)
//         }
//     }
//     return {
//         totalItems: count,
//         totalCost : total,
//         mostExpensiveItem : expenisve.name,
//         bulkItems: bulk,
//         uniqueProducts : unique
//     }
// }
// console.log(ans(cart));


// 5 Order Analyzer
// Write analyzeOrders(orders) that returns:

// totalRevenue — total amount of all delivered orders
// largestOrder — customer who placed the largest order
// deliveredOrders — IDs of delivered orders
// pendingOrders — IDs of pending orders
// cancelledOrders — IDs of cancelled orders

const orders = [
  { id: 101, customer: "Aman", amount: 2500, status: "delivered" },
  { id: 102, customer: "Riya", amount: 4500, status: "pending" },
  { id: 103, customer: "Karan", amount: 1200, status: "delivered" },
  { id: 104, customer: "Neha", amount: 7000, status: "cancelled" }
];


function ans(arr) {
        let sum = 0
        let largest = arr[0]
        let delivered = []
        let pending = []
        let cancelled = []

        for (let item of arr) {
            if (item.status == "delivered") {
                sum += item.amount
            }

            if (item.amount > largest.amount) {
                largest = item
            }

            if (item.status == "delivered") {
                delivered.push(item.id)
            }

            if(item.status == "pending") {
                pending.push(item.id)
            }

            if(item.status == "cancelled") {
                cancelled.push(item.id)
            }
        }

    return {
        totalRevenue : sum,
        largestOrder : largest.customer,
        deliveredOrders : delivered,
        pendingOrders : pending,
        cancelledOrders : cancelled
    }
}
console.log(ans(orders));