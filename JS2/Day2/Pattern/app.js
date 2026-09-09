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

// *
// **
// ***
// ****
// let n = 4
// for (let rows = 1; rows <= n; rows++) {

//     let str = ""
//     for(let column = 1; column <= rows; column++) {
//        // str += "* "
        //     if (rows == 1 || column == 1 || column == rows) {
        //     str += "* "
        // }
        // else{
        //     str += "  "
        // }
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


// A
// B C
// D E F 
// G H I J

// let n = 4
// let count = 1
// for (let row = 1; row <= n; row++) {
//         let str = ""
//         for (let star = 1; star <= row; star++) {
//                 str += String.fromCharCode(64 + count) + " "
//                 count++

//         }
//         console.log(str);
// }



// 1
// 2 3
// 4 5 6
// 7 8 9 10



// 1
// 2 2
// 3 3 3


// 1
// 1 2
// 1 2 3
// 1 2 3 4

// let n = 4
// let count = 1
// for (let row = 1; row <= n; row++) {
//         let str = ""
//         for(let star = 1; star <= row; star++) {
//                 // str += count + " "
//                 // count++
//                 // str += row + " "
//                 str += star + " "
//         }
//         console.log(str);
// }

// A B C D
// E F G 
// H I
// J

// let n = 4
// let count = 1
// for(let row = 1; row <= n; row++) {
//         let str = ""
//         for (let star =1; star <= n-row+1; star++) {
//                 str += String.fromCharCode(64 + count) + " "
//                 count++
//         }
//         console.log(str);
// }


//    1
//   2 3
//  4 5 6
// 7 8 9 10

// let n = 4
// let count = 1
// for (let row = 1; row <= n; row++){
//         let str = ""
//         for (let space = 1; space <= n-row; space++) {
//                 str += "  "
//         }
//         for (let star = 1; star <= row; star++) {
//                 str += count + " "
//                 count++
//         }
//         console.log(str);
// }


// A B C D
//   E F G 
//     H I 
//       J 

let n = 4
let count = 1
for (let row = 1; row <= n; row++) {
        let str = ""
        for (space = 1; space <= row - 1; space++) {
                str += "  "
        }
        for (let star = 1; star <= n-row+1; star++){
                str += String.fromCharCode(64 + count) + ' '
                count++
        }
        console.log(str);
}


