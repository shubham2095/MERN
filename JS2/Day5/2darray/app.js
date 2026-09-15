// let arr = [
//     [1,1,1,1],
//     [2,2,2,2],
//     [3,3,3,3],
//     [4,4,4,4]
// ]

// for (let item of arr) {
//     let s = 0
//     let e = item.length - 1

//     while (s < e){
//         let temp = item[e]
//         item[e] = item[s]
//         item[s] = temp
//     }

// }

let arr = [ [1,2,3], [4,5,6], [7,8,9] ]

for (let row = 0; row < arr.length; row++) {
    let str = ""
    for(let col = 0; col < arr[row].length; col++) {
        str += arr[row][col] + " "
    }
    console.log(str);
}
