function lastOccurrence (arr, x) {
    let start = 0
    let end = arr.length - 1
    let ans = -1
    while (start < end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] == x) {
            ans = mid
            start = mid + 1
        }
        else if (arr[mid]  < x){
            start = mid + 1
        }
        else {
            end = mid - 1
        }
    }
    return ans

}
console.log(lastOccurrence([1,2,4,4,4,5,6,6,6,8], 6));



let arr = [99, 0, 10,1,3,4,6 -3,10,2,3,3,4,5]
let target = 10

function linearSearchLastOccurrence (arr, target) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == target) {
            return i
        }
    }
    return - 1
}
console.log(linearSearchLastOccurrence(arr, target));
