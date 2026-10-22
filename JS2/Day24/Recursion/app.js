// function fibo(n) {
// if (n == 1) {
//     return 0
// }
// if (n == 2) {
//     return 1
// }
// return fibo(n - 1) + fibo(n - 2)
// }
// console.log(fibo(10));

// let map = new Map()

function fibo(n) {

// if (map.has(n)) {
//     return map.get(n)
// }

if (n == 1) {
    return 0
}

if (n == 2) {
    return 1
}

let ans = fibo(n - 1) + fibo(n - 2)
// map.set(n, ans)
return ans
}
console.log(fibo(10));




function subset(arr, ans , i) {
        if (i == arr.length){
            console.log(ans);
            return
        }
        ans.push(arr[i])
        subset(arr, ans, i + 1)
        ans.pop()
        subset(arr, ans, i + 1)
    }

function subsequence(str, ans , i) {
        if (i == str.length){
            console.log(ans);
            return
        }
        let temp = ans + str[i]
        subsequence(str, temp, i + 1)
        subsequence(str, ans, i + 1)
    }

subset([1,2,3,4], [], 0)
subsequence("abc", "", 0)