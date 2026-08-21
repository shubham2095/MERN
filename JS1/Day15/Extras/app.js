let arr = [1,2,3,4]

console.log(0);
console.log(1);
console.log(2);
console.log(3);

// destructuring

const[a,b,c,d] = arr
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// let arr = [1,2,"ac",true

let arr1 = [[1,2,3], [4,5,6],[7,8,9, [10,11,12,[13,14,15,[16,17,18,[19,20,21] ] ] ] ] ]

const Arr2 = arr1.flat(Infinity)

console.log(Arr2);