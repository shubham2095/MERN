let str = "shubham"

for(let i = 0; i < 5; i++) {
console.log(str);
}

function myFirstRecnFn (start, end) {

    if(start == end ) {
        return
    }
    console.log(str);
    myFirstRecnFn(start + 1, end)
}
myFirstRecnFn(0, 5)


for(let i = 5; i > 0; i--) {
    console.log(str);
}

function mySecondRecFn(n) {

    if (n == 0) {
        return
    }

    console.log(str);
    mySecondRecFn(n - 1)
}
mySecondRecFn(5)


