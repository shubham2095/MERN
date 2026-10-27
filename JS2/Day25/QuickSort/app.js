function quicksort(arr) {
    if (arr.length == 0 ||  arr.length == 1) {
        return arr
    }

    let pivotIndex = Math.floor(Math.random() * arr.length)
    let pivot = arr[pivotIndex]
    let left  = []
    let right = []
    for(let i = 0; i < arr.length; i++) {
        if(i == pivotIndex) {
            continue
        }
        if(arr[i] < pivot) {
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }

    let sortedleft = quicksort(left)
    let sortedright = quicksort(right)

    return [...sortedleft, pivot, ...sortedright]
}
console.log(quicksort([9,1,8,2,7,3]))