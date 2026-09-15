// let start = 11
// let end = 15

// for (let n = start; n<= end; n++) {
    
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${n} * ${i} = ${n*i}`);
//     }
// }


let start = 10
let end = 100

for (let n = start; n<= end; n++){
    let isprime = true

    for (let i = 2; i<= Math.sqrt(n); i++) {
        if (n % i == 0) {
            isprime = false
            break
        }
    }
    if (isprime) {
        console.log(`${n} is a prime number`);
    }
    else {
        console.log(`${n} is not a prime number`)
    }
}