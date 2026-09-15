// function special(matrix, n) {

//   for (let row = 0; row < n; row++) {

//     for (let col = 0; col < n; col++) {

//       // Diagonal element
//       if (row == col || col == n - row - 1) {

//         if (matrix[row][col] === 0) {
//           return false;
//         }
//       }
//       // Non-diagonal element
//       else {

//         if (matrix[row][col] !== 0) {
//           return false;
//         }
//       }
//     }
//   }
//   return true
// }

// console.log(special());



// function special (matrix, n) {



// }



// function printBoundaryAntiClockwise (mat) {

//     for(let i = 0; i < mat.length; i++) {
//         console.log(mat[i][0]);
//     }
    
//     for(let i = 1; i < mat[0].length; i++) {
//         console.log(mat[mat.length - 1][i]);
//     }
    
//     for(let i = mat.length - 2; i >= 0; i--) {
//         console.log(mat[i][mat[0].length - 1]);
//     }

//     for(let i = mat[0].length - 2; i > 0 ; i--) {
//         console.log(mat[0][i]);
//     }
// }



function printBoundaryClockwise (mat) {

    for(let i = 0; i < mat.length; i++) {
        console.log(mat[0][i]);
    }
    for(let i = 1; i < mat[0].length; i++) {
        console.log(mat[i][mat.length - 1]);
    }
    for(let i = mat.length - 2; i >= 0; i--) {
        console.log(mat[mat[0].length - 1][i]);
    }
    for(let i = mat[0].length - 2; i > 0 ; i--) {
        console.log(mat[i][0]);
    }
}

printBoundaryClockwise([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
])