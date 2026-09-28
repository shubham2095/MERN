const arr = [23,  4, 9 , -7, 0, 2, 1]


function InsertionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++){

        for(let j = i + 1; j > 0; j--) {

            let isSwapped = false

            if (arr[j] < arr[j -1]){
            // if (arr[j] > arr[j -1]){

                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
                isSwapped = true
            }
            if (isSwapped == false) {
            break;
            }
        }    
    }
    console.log(arr);
}
InsertionSort(arr)