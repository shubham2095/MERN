// let arr = [1, 2 ,3, "abc", true, []]

// console.log(arr);
// console.log(arr.length);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);


// let arr = [1, 2, 3, 4, 5, 6] // destructive methods 

// method / function

// push elements ko add krta h end me and pop element ko remove krta h end se 

// let newlength = arr.push(17, 18, 19, 20)
// let removeval = arr.pop() 
// console.log(arr, newlength, removeval)

// shift element ko ek aage shift kr deta h or unshift element ko ek point piche shift kr deta h 

//let removeval = arr.shift()
// let newlength = arr.unshift(-1,-2,-3)

// console.log(arr);
// console.log(newlength)
// console.log(removeval);

// let arr = [1,2,3,4,5,6]

// slice me start or end point describe hota h lekin end point exclusive rehta h 

// let ans = arr.slice(3)
// let ans = arr.slice(1, 4)
// let ans = arr.slice(1, 400)

// let ans = arr.slice(-3)
// let ans = arr.slice(-3 , -1)
// let ans = arr.slice(-3, -5)

// console.log(ans);
// console.log(arr);


// let arr = [1,2,3,4,5,6]

// splice me start + delete count describe hota h 

// let ans = arr.splice(3,4)

// let ans1 = arr.concat([7,8,9,10,11])
// let ans2 = arr.includes(5)
// let ans3 = arr.indexOf(6)
// let ans4 = arr.lastIndexOf(6)
// let ans5 = ["Shubham", "Sharma"].join(" ")
// arr.reverse()

// console.log(arr);
// console.log(ans1);
// console.log(ans2);
// console.log(ans3);
// console.log(ans4);
// console.log(ans5);

// let arr = [1,2,3,4,5,6]


// array ko while loop se print krna sidha and negative 


// let i = 0
// while(i<arr.length) {
//     console.log(arr[i]);
//     i++
// }

// let j = arr.length - 1
// while(j >= 0) {
//     console.log(arr[j]);
//     j--
// }


// array ko for loop se print krna sidha and negative 


// for(let i = 0;i<arr.length;i++){    
//     console.log(arr[i]);
// }

// for(let j = arr.length-1; j>=0; j--) {   
//     console.log(arr[j]);
// }


// array ko for of loop se print karana but for of loop array ko negative print nhi kr skta 

for(let item of arr) {
    console.log(item);
}