// const arr = [23,  4, 9 , -7, 0, 2, 1]


// function InsertionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++){

//         for(let j = i + 1; j > 0; j--) {

//             let isSwapped = false

//             if (arr[j] < arr[j -1]){
//             // if (arr[j] > arr[j -1]){

//                 let temp = arr[j]
//                 arr[j] = arr[j - 1]
//                 arr[j - 1] = temp
//                 isSwapped = true
//             }
//             if (isSwapped == false) {
//             break;
//             }
//         }    
//     }
//     console.log(arr);
// }
// InsertionSort(arr)


const arr = [5,3,3,5,6,7,78,3,35]


function InsertionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++){

        for(let j = i + 1; j > 0; j--) {
            console.log("loop");
            if (arr[j] < arr[j -1]){
            // if (arr[j] > arr[j -1]){

                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
            }
            else{
                break;
            }

        }    
    }
    console.log(arr);
}
InsertionSort(arr)