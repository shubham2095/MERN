// let arr = [1,2,3,4,5]
// let t = 4

// function BinarySearch (arr, t) {
//     let start = 0
//     let end = arr.length - 1
//     while(start <= end) {
//         let mid = Math.floor((start + end) / 2) 
//         if(arr[mid] == t) {
//             return mid
//         }
//         else if(t < arr[mid]) {
//             end = mid - 1
//         }
//         else {
//             start = mid + 1
//         }
//     }
//     return -1
// }
// console.log(BinarySearch(arr, t));


function cipherPol(s, k) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let ans = ""

    for (let i = 0; i < s.length; i++) {
        let index = (alphabet.indexOf(s[i]) + k) % 26
        ans += alphabet[index]
    }

    return ans
}
console.log(cipherPol("abcde", 2))