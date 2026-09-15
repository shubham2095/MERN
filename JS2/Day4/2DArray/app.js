// let arr = [ [1,2,3], [11,12,13], [21,22,23] ]



// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);




// console.log(arr[0][0]);
// console.log(arr[0][1]);
// console.log(arr[0][2]);
// console.log(arr[1][0]);
// console.log(arr[1][1]);
// console.log(arr[1][2]);
// console.log(arr[2][0]);
// console.log(arr[2][1]);
// console.log(arr[2][2]);



// 0 0
// 0 1
// 0 2
// 1 0
// 1 1
// 1 2
// 2 0
// 2 1
// 2 2


// for (let i = 0; i < 3; i++) {
//     let str = ""
//     for (let j = 0; j < 3; j++) {
//         // str += "* "
//         console.log(i,j);
//     }
//     // console.log(str);
// }





// let arr = [ [1,2,3,4], [11,12,13,14,15], [21,22,23,24,25,26] ]

// for (let row = 0; row < arr.length; row++) {
//     let str = ""
//     for (let col = 0; col < arr[row].length; col++) {
//         // if (row == 0 || row == arr.length - 1 || col == 0 || col == arr[row].length - 1) {
//         //     str += arr[row][col] + " "
//         // }
//         // else {
//         //     str += "  "
//         // }
//         str += arr[row][col] + " "
//     }
//     console.log(str);
// }
    



// let arr = [ [1,2,3], [4,5,6], [7,8,9] ]
// let max = 0

// for (let row = 0; row < arr.length; row++) {
//     let sum = 0
//     for (let col = 0; col < arr[row].length; col++) {

//         sum += arr[col][row]
//     }
//     if (sum > max) {
//         max = sum
//     }
// }
// console.log(max);
    

// let arr = [ [1,2], [2, 3]]

// for (let row = 0; row < arr.length; row++) {
//     let str = ""
//     for (let col = 0; col < arr[row].length; col++) {
//         str += arr[row][col] + " "
//     }
//     console.log(str);
// }

// for (let row = 0; row < arr.length; row++) {
//     for (let col = 0; col < arr[row].length; col++) {
//       let temp = arr[row][col]
//       arr[row][col] = arr[col][row]
//       arr[col][row] = temp;
//     }
//   }
// console.log(arr);


let matrix = [
  [1, 0, 2],
  [0, 2, 0],
  [3, 0, 1]
];

function special(matrix) {

  for (let row = 0; row < matrix.length; row++) {

    if (matrix[row][row] === 0) {
      return false;
    }
  }
  return true;
}
console.log(special(matrix));