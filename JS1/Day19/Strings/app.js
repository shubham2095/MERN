// let str = "hello world"

// console.log(str.at(1));
// console.log(str.charAt(0));
// console.log(str.length);
// console.log(str.concat(" shubham"));
// console.log(str + " "+ "hello");
// console.log(str.endsWith("ld"));
// console.log(str.startsWith("he"));
// console.log(str.includes("o"));
// console.log(str.indexOf("l",5));
// console.log(str.slice(3));
// console.log(str.slice(3,9));

// let msg = "      hello how are you      "

// console.log(msg);
// console.log(msg.trim());
// console.log(msg.trimStart());
// console.log(msg.trimEnd());



// let str = "AZaz"

// console.log(str.charCodeAt(0)) // 65
// console.log(str.charCodeAt(1)); // 90
// console.log(str.charCodeAt(2)); // 97
// console.log(str.charCodeAt(3)); // 122


// for (let i = 65; i<= 90; i++) {
//     console.log(String.fromCharCode(i));
// }

// for (let i = 97; i<= 122; i++) {
//     console.log(String.fromCharCode(i));
// }


// console.log("hello \nworld");

// for (let i = 0; i<= 200; i++) {
//     console.log(i, String.fromCharCode(i));
// }


// let str = "abc"

// console.log(str.repeat(4))
// console.log(str.padEnd(4 ,"*"));


// console.log(Math.ceil(Math.random() * 6));

// let otp =  String(Math.floor(Math.random() * 1000000))
// console.log(otp, otp.padEnd(6 , 1));

// let str = "hello hey how are you"

// console.log(str.replace("e", "y"));
// console.log(str.replaceAll("e", "Y"));

// let str = "hello hey cat how are you"
// let arr = str.split(" ")
// console.log(arr);

// console.log(arr.join(" "));

// let str = 'abc'
// let str2 = 'abc'

// str2 = str2.toUpperCase()

// console.log(str);
// console.log(str2);

// let str1 = "hi"
// let str2 = new String("hi")

// console.log(str1 == str2);

// why strings are immutalbe

// one important reason is that string can be shared. if two variable refernce the same 
// string, allowing one variable to modify that string could unexpectedly affect the other. 
// Making strings immutable prevent this and makes sharing safe.