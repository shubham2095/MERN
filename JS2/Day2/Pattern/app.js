// rectangle with stars + numbers + alphabets


// let n = 4
// let m = 6

// let count = 1

// for (let i = 1; i<= n ; i++) {

//     let str =""
//     for(let j= 1; j<=m; j++) {
        // str += "* "

        // if(i == 1 || i == n || j == 1 || j == m){
        //     str += "* "
        // }
        // else {
        //     str += "  "
        // }

        // str += i + " "
        // str += j + " "
        // str += String.fromCharCode(64 + count) + " "
        // count++
//     }

//     console.log(str);
// }



// right angle triangle

// let n = 10
// for (let rows = 1; rows <= n; rows++) {

//     let str = ""
//     for(let column = 1; column <= rows; column++) {
//         // str += "* "
//             if (rows == 1 || column == 1 || column == rows) {
//             str += "* "
//         }
//         else{
//             str += "  "
//         }
//     }
//     console.log(str);
// }

// hollow 
// ****
// * *
// **
// *
// let n = 4
// for (let rows = 1; rows <= n; rows++) {

//     let str = ""
//     for(let column = 1; column <= n-rows+1; column++) {
//         // str += "* "
//         if (rows == 1 || column == 1 || column == n - rows +1) {
//             str += "* "
//         }
//         else{
//             str += "  "
//         }
//     }
//     console.log(str);
// }


//     *
//    **
//   ***
//  ****
// *****

// let n = 5

// for (let row = 1; row <= n; row++) {
//     let str = ""

//     for (let spaces = 1; spaces <= n - row; spaces++) {
//         str += "  "
//     }
//     for (let star = 1; star <= row; star++) {
//         str += "* "
//     }
//     console.log(str);
// }

// *****
//  ****
//   ***
//    **
//     *

// let n = 5

// for (let row = 1; row <= n; row++) {
//     let str = ""

//     for (let spaces = 1; spaces <= row - 1; spaces++) {
//         str += "  "
//     }
//     for (let star = 1; star <= n-row+1; star++) {
//         str += "* "
//     }
//     console.log(str);
// }


