let arr1 = [10, 20, 30, 40, 50]

let ans1 = arr1.reduce((total, curr) => {
    return total + curr
})
console.log(ans1);



let arr2 = [2, 3, 4, 5];

let ans2 = arr2.reduce((total, curr) => {
    return total * curr
})
console.log(ans2);


let arr3 = [10, 20, 30, 40, 50, 60];

let ans3 = arr3.reduce((total, curr, idx) => {
    return idx + 1
})
console.log(ans3);


let arr4 = [12, 45, 7, 89, 34, 23];

let ans4 = arr4.reduce((total, curr) => {
    return Math.max(total , curr)
}, 0)
console.log(ans4);


let arr5 = [12, 45, 7, 89, 34, 23];

let ans5 = arr5.reduce((total, curr) => {
    return Math.min(total , curr)
})
console.log(ans5);

let arr6 = [1, 2, 3, 4, 5, 6, 7, 8];

let ans6 = arr6.reduce((total, curr) => {
    if(curr % 2 == 0) {
        return total + curr
    }
    else{
        return total
    }
},0)
console.log(ans6);


let arr7 = [1, 2, 3, 4, 5, 6, 7, 8];

let ans7 = arr7.reduce((total,curr) => {
    if(curr % 2 !== 0) {
        return total + curr
    }
    else{
        return total
    }
},0)
console.log(ans7);


let arr8 = [10, 15, 20, 25, 30, 35, 40];

let ans8 = arr8.reduce((total,curr) => {  
    if(curr % 2 == 0) {
        return ++total
    }
    else{
        return total
    }
},0)
console.log(ans8);


let arr9 = [10, 15, 20, 25, 30, 35, 40];

let ans9 = arr9.reduce((total, curr) => {
    if(curr % 2 !== 0) {
        return ++total
    }
    else{
        return total
    }
},0)
console.log(ans9);


let arr10 = [10, 20, 30, 40, 50];

let ans10 = arr10.reduce((total, curr, index) => {
    if(index == arr10.length -1) {
        return (total + curr) / arr10.length
    }
    return total + curr
})
console.log(ans10);


let arr11 = [-5, 10, -2, 8, 0, 15, -7];

let ans11 = arr11.reduce((total, curr) => {
    if (curr > 0) {
        return ++total
    }
    else {
        return total
    }
},0)
console.log(ans11);


let arr12 = [-5, 10, -2, 8, 0, 15, -7];

let ans12 = arr12.reduce((total,curr) => {
    if(curr < 0 ) {
        return ++total
    }
    else{
        return total
    }
},0)
console.log(ans12);


let arr13 = [0, 1, 0, 2, 3, 0, 4, 0];

let ans13 = arr13.reduce((total, curr) => {
    if(curr == 0) {
        return ++total
    }
    else {
        return total
    }
},0)
console.log(ans13);


let arr14 = ["cat", "elephant", "dog", "tiger"]

let ans14 = arr14.reduce((total, curr) => {
    if(curr.length > total.length) {
        return curr
    }
    else{
        return total
    }
})
console.log(ans14);

let arr15 = ["apple", "kiwi", "banana", "fig"];

let ans15 = arr15.reduce((total, curr) => {
    if(total.length > curr.length) {
        return curr
    }
    else{
        return total
    }
})
console.log(ans15);


let arr16 = ["apple", "banana", "cat", "elephant", "dog", "computer"];

let ans16 = arr16.reduce((total, curr) => {
    if(curr.length > 5) {
        return ++total
    }
    else{
        return total
    }
},0)
console.log(ans16);


let arr17 = ["Hello", "World", "JavaScript"];

let ans17 = arr17.reduce((total,curr) => {
    return total + " " + curr
})
console.log(ans17);


let arr18 = [1, 2, 3, 4, 5];

let ans18 = arr18.reduce((total,curr) => {
    return [curr, ...total]
},[])
console.log(ans18);

let arr19 =  [100, 250, 50, 300, 150];

let ans19 = arr19.reduce((total, curr) => {
    return total + curr
})
console.log(ans19);


let arr20 = [100, 200, 300];

let ans20 = arr20.reduce((total, curr,index) => {
    if(index == arr20.length - 1) {
        return (total + curr) * 1.18
    }
    return total + curr
})
console.log(ans20);