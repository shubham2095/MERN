let a1 = [0,1,11,99,100,101]
let a2 = [2,4,6,6,55,56]

let a3 = []

let i = 0
let j = 0

while (i < a1.length && j < a2.length) {
    if (a1[i] <= a2[j]) {
        a3.push(a1[i])
        i++
    } else {
        a3.push(a2[j])
        j++
    }
}

while (i < a1.length) {
    a3.push(a1[i])
    i++
}

while (j < a2.length) {
    a3.push(a2[j])
    j++
}

console.log(a3)