// const arr = [9,1,0,3,4,5,-15,19,13,14,11,22,24,23,21]

// arr.sort() // lexographical / dictionary

// arr.sort((a,b) => {
//     return a - b
// })


// arr.sort((a,b) => {
//     return b - a
// })

// console.log(arr)



// let arr = [
//     {
//         name : "A",
//         age : 32
//     },

//     {
//         name : "B",
//         age : 30
//     },

//     {
//         name : "C",
//         age : 18
//     },

//     {
//         name : "D",
//         age : 6
//     },
// ]


// arr.sort((a,b) => {
//     // return a.age - b.age
//     return b.age - a.age
// })



// console.log(arr)



// Question 1

// let arr = [5, 2, 8, 1, 3]
// arr.sort((a,b) => {
//     return a - b
// })
// console.log(arr)


// Question 2


// let arr2 = [10, 4, 7, 2, 9]
// arr2.sort((a,b) => {
//     return b - a
// })

// console.log(arr2)


// Question 3


// let arr3 = ["banana", "apple", "mango", "cherry"]
// arr3.sort()
// console.log(arr3)



// Question 4


// let arr4 = ["Raj", "Amit", "Ram", "Karan", "Bob"]
// // [
// //     "Bob",
// //     "Raj",
// //     "Ram",
// //     "Amit",
// //     "Karan"
// // ]

// arr4.sort((a, b) => {
//     if(a.length == b.length)
//     {
//         return a.localeCompare(b)
//     }
//     return a.length - b.length
// })
// // -ve -> a - b
// // +ve -> a - b
// // 0 -> a - b


// console.log(arr4)



// Question 5


// let arr = [
//     {name:"Rahul",age:20}, 
//     {name:"Amit",age:18}, 
//     {name:"Priya",age:20},
//     {name:"Raj",age:18}
// ]


// arr.sort((a,b) => {
//     if(a.age == b.age)
//     {
//         return a.name.localeCompare(b.name)
//     }
//     return a.age - b.age
// })

// console.log(arr)



// Question 6


// let arr = [
//     {name:"Rahul",salary:50000}, 
//     {name:"Amit",salary:70000}, 
//     {name:"Priya",salary:70000},
//     {name:"Raj",salary:50000}

// ]

// arr.sort((a,b) => {
//     if(a.salary == b.salary)
//     {
//         return a.name.localeCompare(b.name)
//     }
//     return b.salary - a.salary
// })

// console.log(arr)




// Question 7


// let arr = [
// {name:"A",price:500,rating:4.2}, 
// {name:"B",price:300,rating:4.5},
// {name:"C",price:500,rating:4.8}, 
// {name:"D",price:300,rating:4.1}
// ]

// arr.sort((a , b) => {
//     if(a.price == b.price) {
//         return b.rating - a.rating
//     }
//     return a.price - b.price
// })

// console.log(arr);



// Question 8



// let arr = [
//     {name:"A",marks:90,age:21}, 
//     {name:"B",marks:90,age:19}, 
//     {name:"C",marks:85,age:20}
// ]

// arr.sort((a,b) => {
//     if (a.marks == b.marks) {
//        return  a.age - b.age
//     }
//     return b.marks - a.marks
// })
// console.log(arr);



// Question 9


// let arr = [4, 4, 2, 2, 2, 3, 3, 1]
// let obj = {}

//     for(let item of arr) {
//     obj[item] = obj[item] + 1 || 1
// }
// arr.sort((a, b) => {
//     if(obj[a] == obj[b]) {
//         return a - b
//     }
//     return obj[b] - obj[a]
// })
// console.log(arr);




// Question 10

// let arr = ["cat", "elephant", "dog", "tiger", "ant"]

// arr.sort((a , b) => {
//     if(a.length == b.length) {
//         return a.localeCompare(b)
//     }
//     return b.length - a.length
// })
// console.log(arr);





// Question 11


// let arr = [
//     {name:"A",score:100,level:5}, 
//     {name:"B",score:100,level:7},
//     {name:"C",score:90,level:8}, 
//     {name:"D",score:100,level:7}
// ]

// arr.sort((a ,b) => {
//     if (a.score == b.score) {
//         if(a.level == b.level) {
//             return a.name.localeCompare(b.name)
//         }
//         return b.level - a.level
//     }
//     return b.score - a.score
// })
// console.log(arr);




// Question 12


// let arr = [
//     {title:"A",rating:8.5,year:2022}, 
//     {title:"B",rating:9.0,year:2020},
//     {title:"C",rating:8.5,year:2019}
// ]

// arr.sort((a, b) => {
//     if (a.rating == b.rating) {
//         if (a.year == b.year) {
//             return a.title.localeCompare(b.title) 
//         }
//         return a.year - b.year
//     }
//     return b.rating - a.rating
// })
// console.log(arr);




// Question 15

// let arr = [
//     {id:1,status:"Completed",amount:500}, 
//     {id:2,status:"Pending",amount:200},
//     {id:3,status:"Pending",amount:800}, 
//     {id:4,status:"Processing",amount:400}
// ]

// const priority = {
//     Completed : 3,
//     Processing : 2,
//     Pending : 1
// }

// arr.sort ((a, b) => {
//     if(a.status == b.status) {
//         return a.amount - b.amount
//     }
//     return priority[a.status] - priority[b.status]
// })
// console.log(arr);


// Question 18

// let arr = [
//     {task:"A",priority:"High",deadline:"2026-10-10"},   
//     {task:"B",priority:"High",deadline:"2026-09-25"},
//     {task:"C",priority:"Low",deadline:"2026-09-20"},
//     {task:"D",priority:"Medium",deadline:"2026-09-24"}
// ]

// let p = {
//     high : 3,
//     medium : 2,
//     low : 1
// }

// arr.sort((a , b) => {
//     if(a.priority == b.priority) {
//         return a.deadline.localeCompare(b.deadline)
//     }
//     return p[a.priority] - p[b.priority]
// })
// console.log(arr);



var smallestIndex = function(nums) {
    for(let i = 0; i<nums.length; i++) {
    let num = nums[i]
    let sum = 0
    while (num > 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }
    if (sum == i) {
        return i
    }
    }
    return -1
};
console.log(smallestIndex([1,10,11]));


function linearSearchFirstOccurrence(nums) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[0]) {
            return i
        }
    }
    return -1
}