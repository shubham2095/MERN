// var n = 20
// if (n ==0) {
//     console.log("zero");
// }
// else if (n > 0) {
//     console.log("+ve");
// }
// else {
//     console.log("-ve");
// }


// var marks = 80

// if (marks >=0 && marks <= 60) {
//     console.log("fail")
// }
// else if (marks >=61 && marks<= 70) {
//     console.log("C");
// }
// else if (marks >= 71 && marks <= 80) {
//     console.log("B");
// }
// else if (marks >= 81 && marks <= 90) {
//     console.log("A");
// }
// else if (marks >= 91 && marks <= 100){
//     console.log("A+");
// }


// var marks = 28;
// if(marks < 0 || marks >=100) {
//     console.log("Invalid Marks");
// }
// else if (marks > 90) {
//     console.log("A+");
// }
// else if (marks > 80) {
//     console.log("A");
// }
// else if (marks > 70) {
//     console.log("B");
// }
// else if (marks > 60) {
//     console.log("C");
// }
// else {
//     console.log("Fail");
// }


// const month = 11
// if (month < 1 || month > 12 ) {
//     console.log("Invalid Number");
// }

// else if ( month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 ) {
//     console.log("31");
// }

// else if (month == 2) {
//     console.log("28/29");
// }

// else {
//     console.log("30");
// }

// var a = 10;
// var b = 20;
// var c = 30;

// if (a > b && a > c) {
//     console.log(a);
// }
// else if (b > c) {
//     console.log(b);
// }
// else {
//     console.log(c);
// }


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (sides) => {
      let [a,b,c] = sides.split(' ');
      a = parseInt(a);
      b = parseInt(b);
      c = parseInt(c);
    if (a > b && a > c) {
        var max = a
    }
    else if (b > c) {
        var max = b
    }
    else {
        var max = c
    }
      var LHS = 2*max*max;
      var RHS = (a*a) + (b*b) + (c*c);
      if (LHS < RHS ) {
        console.log(1)
      }
      else if (LHS == RHS) {
        console.log (2)
      }
      else {
        console.log(3)
      }
      rl.close();
    });