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


var marks = 78;
if(marks < 0 || marks >=100) {
    console.log("Invalid Marks");
}
else if (marks > 90) {
    console.log("A+");
}
else if (marks > 80) {
    console.log("A");
}
else if (marks > 70) {
    console.log("B");
}
else if (marks > 60) {
    console.log("C");
}
else {
    console.log("Fail");
}
