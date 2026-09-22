let arr = [99, 0, 10,1,3,4,6 -3,10,2,3,3,4,5]
let target = 10

function linearSearchBoolean(arr, t) {
    for (let item of arr) {
        if (item == t) {
            return true
        }
    }
    return false
}

function linearSearchFirstOccurrence(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i
        }
    }
    return -1
}

function linearSearchLastOccurrence (arr, target) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == target) {
            return i
        }
    }
    return - 1
}

console.log(linearSearchBoolean(arr, target));
console.log(linearSearchFirstOccurrence(arr, target));
console.log(linearSearchLastOccurrence(arr, target));



// let arr = [
//     {
//         age: 32,
//         name: "A"
//     },
//     {
//         age: 30,
//         name: "B"
//     },
//     {
//         age: 2,
//         name: "C"
//     },
//     {
//         age: 90,
//         name: "D"
//     },
//     {
//         age: 10,
//         name: "E"
//     }
// ]


// let ans = []
// let max = arr[0]
// for (let item of arr) {
//     if (item.age > max.age) {
//         ans.push(item.name)
//     }
// }
// console.log(ans);


// let arr = [1,2,3,4,5,1,2,3]
// function FirstRepeatingNumber(arr) {
//     for(let i = 1; i < arr.length; i++) {
//         if (!(arr.indexOf(arr[i]) == i)) {
//             return arr[i]
//         }
//     }
//     return null
// }
// console.log(FirstRepeatingNumber(arr));


// let arr = [1,2,3,4,5,1,21,34,21] 
// let target = 4

// function FindElementGreater (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > target) {
//             return arr[i]
//         }
//     }
//     return -1
// }
// console.log(FindElementGreater(arr, target));


// let arr = [1,11,21,31,2,20,56] 
// let target = 24
// function ClosestElement (arr) {
//     let max = -Infinity
//     for(let i = 0; i< arr.length; i++) {
//         let dif = 0
//         dif = Math.abs(arr[i] - target)
//         if(dif > max) {
//             max = dif
//         }
//     }
//     return max
// }

// console.log(ClosestElement(arr, target));



