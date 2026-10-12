function Alphabets(str) {
    let map = new Map()
    for(let item of str) {
        map.set(item, (map.get(item) || 0 ) + 1)
    }

    let ans = ""
    for(let i = 97; i <= 122; i++) {
        if(map.has(String.fromCharCode(i))) {
            ans += map.get(String.fromCharCode(i)) + " "
        }
        else{
            ans += "0 "
        }
    }
    return ans
}
console.log(Alphabets("abcdabcdz"))



function removeDuplicates(str) {

let set = new Set(str)
let ans =""
set.forEach(val => {
    ans += val

})
return ans
}

console.log(removeDuplicates("helloworld"));



function findSum(arr, n, sum) {
  let set = new Set()
  let ans = 0
  for(let item of arr) {
    if(set.has(sum - item))  {
        ans++
    }
        set.add(item)
  }  
  return ans
}
console.log(findSum[1,2,2,4,3]);



function findLongestSubArray(array, k) {
    let ans = 0
  for(let i = 0; i< array.length; i++) {
    let sum = 0

    for(let j = i; j < array.length; j++) {
        sum += array[j]

        if (sum == k) {
            ans = Math.max(ans, j -i + 1)
        }
    }
  }
  return ans 
}
console.log(findLongestSubArray([10,5,2,7,1,9],10));