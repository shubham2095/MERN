// let n = 10;
// for (let i =  1; i < n; i++) {
//     console.log(`${n} * ${i} = ${n*i}`);
// }

// let start = 5;
// let end = 11;

// for (let i = start; i<=end; i++){
    
//     for(let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }





// let n = 3
// for(let rows = 1; rows <= n; rows++)
// {    
//     let str = ""

//     for(let stars = 1; stars <= n; stars++) 
// {
//         str += " * "
// }
//     console.log(str);
// }




// let n = 3
// for(let rows = 1; rows <= n; rows++)
// {    
//     let str = ""

//     for(let stars = 1; stars <= n; stars++) + " "
// {
//         str += rows
// }
//     console.log(str);
// }




// let n = 3
// for(let rows = 1; rows <= n; rows++)
// {    
//     let str = ""

//     for(let stars = 1; stars <= n; stars++) + " "
// {
//         str += stars
// }
//     console.log(str);
// }



// let count = 1
// let n = 3
// for(let rows = 1; rows <= n; rows++)
// {    
//     let str = ""

//     for(let stars = 1; stars <= n; stars++) + " "
// {
//         str += count
//         count++
// }
//     console.log(str);
// }





// let n = 4
// for(let rows = 1; rows <= n; rows++)
// {    
//     let str = ""

//     for(let stars = 1; stars <= n; stars++) 
// {
//         if(rows == 1 || rows == n || stars == 1 || stars == n) {
//             str += "* "
//         }
//         else {
//             str += "  "
//         }
// }
//     console.log(str);
// }




// let count = 1
// let n = 5
// for(let rows = 1; rows <= n; rows++)
// {    
//     let str = ""

//     for(let stars = 1; stars <= n; stars++) 
// {
//         // str += String.fromCharCode(64 + rows)
//         // str += String.fromCharCode(64 + stars)
//         str += String.fromCharCode(64 + count) + " "
//         count++
// }
//     console.log(str);
// }




// let n = 4
// let count = 1
// for(let rows = 1; rows <= n; rows++)
// {    
//     let str = ""

//     for(let stars = 1; stars <= n; stars++) 
// {
//         if(rows == 1 || rows == n || stars == 1 || stars == n) {
//             str += count + " "
//         }
//         else {
//             str += "  "
//         }
//         count++
// }
//     console.log(str);
// }



// let n = 4
// let count = 1
// for(let rows = 1; rows <= n; rows++)
// {    
//     let str = ""

//     for(let stars = 1; stars <= n; stars++) 
// {
//         if(rows == 1 || rows == n || stars == 1 || stars == n) {
//             str += String.fromCharCode(64 + count) + " "
//         }
//         else {
//             str += "  "
//         }
//         count++
// }
//     console.log(str);
// }



// let n = 4
// for (let rows = 1 ; rows <= n; rows++) {
//     let str = ""
//     for (let stars = 1; stars <= n; stars++) {
//         if (rows == stars) {
//             str += "* "
//         }
//         else {
//             str += " "
//         }
//     }
//     console.log(str);
// }


// let n = 4
// for (let rows = 1 ; rows <= n; rows++) {
//     let str = ""
//     for (let stars = 1; stars <= n; stars++) {
//         if (stars == n- rows + 1) {
//             str += "* "
//         }
//         else {
//             str += " "
//         }
//     }
//     console.log(str);
// }




let n = 10
for (let rows = 1 ; rows <= n; rows++) {
    let str = ""
    for (let stars = 1; stars <= n; stars++) {
        if (rows == 1 || rows == n || stars == 1 || stars == n || rows == stars || stars == n-rows+1){
            str += "* "
        }
        else {
            str += "  "
        }
    }
    console.log(str);
}
