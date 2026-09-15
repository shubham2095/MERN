



// let n = 5

// let spaces = n - 1
// let stars = 1
// let count = 1

// for(let row = 1; row <= n; row++) {
//     let str = ""                                                                            
//     for (let space = 1; space <= spaces; space++) {
//         str += "  "
//     }
//     for(let star = 1; star <= stars; star++){
        // str += "* "
        // if (row == n || star == 1 || star == stars ) {
        //     str += "* "
        // }
        // else{
        //     str += "  "
        // }
        // str += row + ' '
        // str += star + ' '
//         str += count + " "
//         count++
//     }
//     spaces--
//     stars += 2        
//     console.log(str);
// }





// let n = 5

// let spaces = 0

// let stars = 2 * n - 1

// for (let row = 1; row <= n; row++) {
    // let str = ""
    // for (let space = 1; space <= spaces; space++) {
    //     str += "  "
    // }
    // for(let star = 1; star <= stars; star++) {
        // str += "* "
//         if(row == 1 || star == 1 || star == stars){
//             str += "* "
//         }
//         else {
//             str += "  "
//         }
//     }
//     spaces++
//     stars -= 2
//     console.log(str);
// }





let n = 5
let spaces = (n- 1) / 2
let stars = 1

for (let row = 1; row <= n; row++) {
    let str = ""
    for(let space = 1; space <= spaces; space++) {
        str += "  "
    }
    for(let star = 1; star <= stars; star++) {
        str += "* "
    }
    if (row <= Math.floor(n / 2) ) {
        spaces --
        stars += 2
    } 
    else {
        spaces++
        stars -= 2
    }
    console.log(str);
}





// let n = 3

// let spaces = n
// let stars = 1
// let rows = 2 * n + 1

// for (let row = 1; row<= 2 * n + 1; row++) {
//     let str = ""
//     for(let space = 1; space <= spaces; space++) {
//         str += "  "
//     }
//     for(let star = 1; star <= stars; star++) {
//         str += "* "
//         if( star == 1 || star == stars) {
//             str += "* "
//         }
//         else {
//             str += "  "
//         }
//     }
//     if(row <= n) {
//         spaces--
//         stars += 2
//     }
//     else {
//         spaces++
//         stars -= 2
//     }
//     console.log(str);
// }   





// let n = 5

// let spaces = 0
// let stars = n

// for (let row = 1; row <= n; row++) {
//     let str = ""
//     for (let space = 1; space <= spaces; space++) {
//         str += "  "
//     }
//     for (let star = 1; star <= stars; star++) {
//         str += "* "
//         if (star == 1 || star == stars || row == 1 || row == n ) {
//             str += "* "
//         }
//         else {
//             str += "  "
//         }
//     }
//     if (row <= n / 2) {
//         spaces ++
//         stars -= 2
//     }
//     else {
//         spaces--
//         stars +=2
//     }
//     console.log(str);
// }




// let n = 5 
// let stars = 1
// let spaces = n - 2

// for (row = 1; row <= n; row++) {
//     let str = ""
//     for (let star = 1; star <= stars; star++) {
//         str += "* "
//     }
//     for(let space = 1; space <= spaces; space++) {
//         str += "  "
//     }
//     for (let star = 1; star <= stars; star++) {
//         if (star == stars && row == (n + 1) / 2) continue
//             str += "* "
//     }
//     if (row <= n / 2) {
//         spaces -=2
//         stars++
//     }
//     else {
//         spaces +=2
//         stars--
//     }
//     console.log(str);
// }


