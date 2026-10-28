function mergeSortedArrays (a, b) {
let i = 0
let j = 0

let ans = []
while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
        ans.push(a[i])
        i++
    } else {
        ans.push(b[j])
        j++
    }
}

while (i < a.length) {
    ans.push(a[i])
    i++
}

while (j < b.length) {
    ans.push(b[j])
    j++
}
return ans
}


function MergeSort (arr) {
    if (arr.length == 0 || arr.length == 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)

    let Sortedleft = MergeSort(arr.slice(0 , mid))
    let Sortedright = MergeSort(arr.slice(mid))

    return mergeSortedArrays(Sortedleft, Sortedright)
}

console.log(MergeSort([9,4,5,7,3,3,2,1,4,11,24,2,22]));

