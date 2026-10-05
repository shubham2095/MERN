// let arr = [1,3,5,2,4,-10,99,1000]

// let ans = arr.find((item) => {
//     return item == 1
// })
// console.log(ans);


// let a2 = arr.every((item) => {
//     return item > 0
// })
// console.log(a2);

// let a3 = arr.some((item) => {
//     return item < 0
// })
// console.log(a3);



let arr1 = [1, 2, 3, 4]

let ans1 = arr1.map((item) => {
    return item + item
})
console.log(ans1);

let arr2 = [1, 2, 3, 4, 5, 6]

let ans2 = arr2.filter((item) => {
    return item % 2 == 0
})
console.log(ans2);

let arr3 = [5, 10, 15]

let ans3 = arr3.reduce((total, curr) => {
    return total + curr
})
console.log(ans3);


let arr4 = [4, 9, 12, 7, 15]

let ans4 = arr4.find((item) => {
    return item > 10
})
console.log(ans4);

let arr5 = [3, -1, 5]

let ans5 = arr5.some((item) => {
    return item < 0
})
console.log(ans5);

let arr6 = ["a", "b", ""]

let ans6 = arr6.every((item) => {
    return item == ""
})
console.log(ans6);

let arr7 = ["a", "b", "a", "c", "b", "a"]

let ans7 = arr7.reduce((total, curr) => {
    if (total[curr]) {
       total[curr]++ 
    }
    else {
        total[curr] = 1
    }
    return total
}, {})
console.log(ans7);

let arr8 = [1, 3, 5, 7]

let ans8 = arr8.every((item, index) => {
    if(index == 0) {
        return true
    }
    return item >= arr8[index - 1]
})
console.log(ans8);


let arr9 = [1, 2, 3, 4, 5]

let ans9 = arr9.filter((item) => item % 2 !== 0).map((item) => item ** 2)

console.log(ans9);


let arr10 = [
 { name: "Pen", price: 10, inStock: true },
 { name: "Book", price: 50, inStock: false },
 { name: "Bag", price: 30, inStock: true }
]

let ans10 = arr10.filter((item) => item.inStock == true).reduce((total, curr) => total.price + curr.price)

console.log(ans10);


let arr11 = [{ price: 100, qty: 2 }, { price: 50, qty: 3 }]

let ans11 = arr11.map((item) => item.price * item.qty).reduce((total, curr) => total + curr)

console.log(ans11);


let arr12 = [45, 78, 100, 62]
let ans12 = {
    allpassed : arr12.every((item) => item >= 40),
    anyperfect : arr12.some((item) => item >= 100)
}
console.log(ans12);


let arr13 =  [
 { first: "John", last: "Doe", active: true },
 { first: "Jane", last: "Smith", active: false },
 { first: "Sam", last: "Lee", active: true }
]

let ans13 = arr13.filter((item) => item.active == true).map((item) => item.first + " " + item.last)

console.log(ans13);

let arr14 = [
 { id: 1, items: [{ name: "Laptop" }] },
 { id: 2, items: [{ name: "Mouse" }, { name: "Keyboard" }] }
]

let ans14 = arr14.find((item) => item.id == 2).items.map((item) => item.name)

console.log(ans14);


let arr15 = [
 { name: "Shirt", tags: ["new", "cotton"] },
 { name: "Shoes", tags: ["sale", "leather"] },
 { name: "Cap", tags: ["sale"] }
]

let ans15 = arr15.find((item) => item.tags.some((tag) => tag == "sale"))

console.log(ans15);


let arr16 = ["1", "abc", "3", "4x", "5"]

let ans16 = arr16.map((item) => Number(item)).filter((item) => item > 0 || item < 0)
console.log(ans16);


let arr17 = [-2, 3, -1, 4, 5]

let ans17 = arr17.filter((item) => item > 0).reduce((total, curr) => total * curr)

console.log(ans17);

let arr18 = [{ name: "ria", age: 17 }, { name: "dev", age: 22 }, { name: "om", age: 30 }]

let ans18 = arr18.filter((item) => item.age >= 18).map((item) => item.name.toUpperCase())

console.log(ans18);


let arr19 = ["hi", "hello", "js"]

let ans19 = arr19.map((item, index) => item.length).reduce((total, curr) => total + curr)

console.log(ans19);

let arr20 = [[1, -2], [3, 4], [5, 6]]

let ans20 = arr20.find((item) => item.every((item) => item > 0))

console.log(ans20);


let arr21 = [[2, 4], [1, 2], [6, 8, 10], [3]]

let ans21 = arr21.filter((item) => item.every((item) => item % 2 == 0))

console.log(ans21);

let arr22 = [
 { name: "A", marks: [40, 30, 50] },
 { name: "B", marks: [60, 70, 80] },
 { name: "C", marks: [20, 90, 34] }
]

let ans22 = arr22.filter((item) => item.marks.some((item) => item < 35))

console.log(ans22);

let arr23 = [98.6, 100.4, 104]
let celcius = arr23.map((item) => Math.round((item - 32) * 5 / 9))
let ans23 = {
    celcius : celcius,
    allBelow40 : celcius.every((item) => item > 40 )
} 

console.log(ans23);

let arrr24 = [
 { id: 1, txns: [100, -50, 200] },
 { id: 2, txns: [500, -100] }
]

let ans24 = arrr24.find((item) => item.id == 2).txns.reduce((total,curr) => total + curr)

console.log(ans24);


let arr25 = [
 { email: "a@gmail.com", verified: true },
 { email: "b@yahoo.com", verified: false },
 { email: "c@outlook.com", verified: true }
]

let ans25 = arr25.filter((item) => item.verified == true).map((item) => item.email.split("@")[1])

console.log(ans25);


let arr26 = [123, 45, 6]

let ans26 = arr26.map(item => String(item).split("").reduce((total, curr) => total + Number(curr),0))

console.log(ans26);

let arr27 = [
 { name: "A", dept: "Eng", salary: 50000 },
 { name: "B", dept: "HR", salary: 40000 },
 { name: "C", dept: "Eng", salary: 70000 }
]

let ans27 = arr27.filter((item) => item.dept == "Eng").reduce((total, curr) => total.salary + curr.salary)

console.log(ans27);

let arr28 = [{ item: "pen", qty: 5 }, { item: "ink", qty: 0 }, { item: "pad", qty: 0 }]

let final = {
    hasOutOfStock : arr28.some((item) => item.qty == 0),
    first : arr28.find((item) => item.qty == 0)?.item
}
console.log(final);

let array = (arr) => {
    let ans29 = arr.every((item) => typeof item == "number")
    if(ans29) {
        return arr.map(item => item * 2)
    }
    else {
        return "Invalid Input"
    }
}
console.log(array([1,2,3]));
console.log(array([1,"2",3]));


let arr30 = [5, 3, 5, 1, 5]
let target = 5

let ans30 = arr30.map((item, index) => {
    if (item == target){
        return index
    }
    else{
        return null
    }
})
let an30 = ans30.filter((item) => {
        if (item !== null) {
            return true
        }
        else{
            return false;
        }
    })
console.log(an30);


let arr31 = [
 { name: "Ravi", role: "user" },
 { name: "Priya", role: "admin" },
 { name: "Aman", role: "admin" }
]

let ans31 = "NO admins";
 if(arr31.some((item) => item.role == "admin")) {
    ans31 = arr31.filter((item) => item.role == "admin").map((item) => item.name)

} 
console.log(ans31);


let arr32 = [
 { name: "A", marks: 30 }, { name: "B", marks: 60 }, { name: "C", marks: 80 },
 { name: "D", marks: 45 }, { name: "E", marks: 90 }
]

let ans32 = arr32.filter((item) => item.marks >= 50).map((item) => item.marks)
let an32 = (ans32.reduce((total,curr) => total + curr, 0) / ans32.length).toFixed(2)

console.log(an32);


let arr33 = [
 { team: "A", ages: [19, 22, 25] },
 { team: "B", ages: [17, 20] },
 { team: "C", ages: [30, 40] }
]

let ans33 = arr33.filter((item) => item.ages.every((item) => item > 18)).map((item) => item.team)

console.log(ans33);


let arr34 = [
 { id: 1, items: [200, 500] },
 { id: 2, items: [1500, 100] },
 { id: 3, items: [999, 1200] }
]

let ans34 = arr34.filter((item) => item.items.some((item) => item > 1000)).map((item) => item.id)

console.log(ans34);


let arr35 = ["hello123", "password", "abc1", "secure2024"]

let ans35 = arr35.filter((item) => item.length >= 8 && item.split("").some(ch => !isNaN(ch)))

let valid = ans35.length === arr35.length

console.log({ans35 , valid});

let arr36 = [
 { name: "TV", cat: "elec", price: 1000 },
 { name: "Shirt", cat: "cloth", price: 500 },
 { name: "Phone", cat: "elec", price: 2000 }
]

let ans36 = arr36.filter((item) => item.cat == "elec").map((item) => item.price * 0.9).reduce((total,curr) => (total + curr))

console.log(ans36);

let arr37 = [" Hello", "Level ", "noon", "a"]

let ans37 = arr37.map((item) => item.trim().toLowerCase()).filter((item) => item.length > 1).find((item) => item === item.split("").reverse().join(""))

console.log(ans37);

let arr38 = [
 { name: "A", marks: [80, 90] },
 { name: "B", marks: [95, 85] },
 { name: "C", marks: [70, 60] }
]

let ans38 = arr38.map((item) => item.marks.reduce((a,b) => a + b , 0))
let max = Math.max(...ans38)
let finals = arr38.find((s, i) => ans38[i] === max).name

console.log(finals);

let arr39 = [[1, 2], [3, 4], [5, 6]]

let newarr39 = arr39.flat()

let ans39 = newarr39.filter((item) => item > 2).map((item) => item * 10)

console.log(ans39);


let arr40 = ["amit:45", "neha:80", "raj:30"]

let ans40 = arr40.map((item) => {
    let [name, score] = item.split(":")
    return {name, score: Number(score)}
})

let passed = ans40.filter((item) => item.score >= 40).map((item) =>item.name)
let above = ans40.every((item) => item.score > 25)

console.log({passed , above});