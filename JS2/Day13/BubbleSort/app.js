let arr = [98,765,54,3,67,86,4,65]
let counter = 0

for(let i = 0; i < arr.length -1; i++) {

    let isArraySorted = true
    
    for(let j = 0; j <arr.length - i - 1; j++) {

        counter++
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp

            isArraySorted = false
        }
    }
    if(isArraySorted){
        break;
    }
}
console.log(arr, counter);