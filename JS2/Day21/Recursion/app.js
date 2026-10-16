let str = "Shubham"

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


function print(i , n) {
    if(i > n) {
        return
    }
    console.log(i);
    print(i + 1, n)
}
print(1, 4)



function println(i , n) {
    if(i > n) {
        return
    } 
    println(i + 1, n)
    console.log(i);
}
println(1, 4)


function sum(i , n , ans) {
    if(i > n ) {
        return ans
    }
    ans += i
    return sum(i + 1, n , ans)
}
console.log(sum(1, 10, 0))