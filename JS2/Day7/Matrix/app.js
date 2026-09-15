// var spiralOrder = function(arr){
//     let top = 0
//     let bottom = arr.length - 1
//     let left = 0
//     let right = arr[0].length - 1
//     let ans = []

//     while(left <= right && top <= bottom) {

//         // if (left <= right && top <= bottom) {
            
//             for (let i = left; i <= right; i++) {
//                 ans.push(arr[top][i])
//             }
//         // }

//         top++

//         //  if (left <= right && top <= bottom) {
            
//             for (let i = top; i<= bottom; i++) {
//                 ans.push(arr[i][right])
//             }
//         // }

//         right--

//          if (left <= right && top <= bottom) {
            
//             for (let i = right; i >= left; i--) {
//                 ans.push(arr[bottom][i])
//             }
//         }

//         bottom--

//          if (left <= right && top <= bottom) {
            
//             for (let i = bottom; i >= top; i--) {
//                 ans.push(arr[i][left])
//             }
//         }

//         left++

//     }

//     return ans

// }

// console.log(spiralOrder([
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
// ]));



var spiralOrder = function(arr) {
    let top = 0
    let bottom = arr.length - 1
    let left = 0
    let right = arr[0].length - 1
    let ans = []

    while (left <= right && top <= bottom) {

        for (let i = top; i <= bottom; i++) {
        ans.push(arr[i][left])
    }
    left++

    for (let i= left; i <= right; i++) {
        ans.push(arr[bottom][i])
    }
    bottom--

    for (let i= bottom; i >= top; i--) {
        ans.push(arr[i][right])
    }
    right--

    for (let i = right; i >= left; i--) {
        ans.push(arr[top][i])
    }
    top++

    } 
    return ans
}

console.log(spiralOrder([
    [1,2,3,4,40,50,60],
    [5,6,7,8,80,90,100],
    [9,10,11,12,120,130,140],
    [13,14,15,16,160,170,180]
]));
