// let str = "abcd"
// let ans = []

// for (let i = 0; i< str.length; i++) {

//     let temp = ""

//     for(let j = i; j < str.length; j++) {
        
//         // console.log(str.slice(i, j+1));
        
//         temp += str[j]
//         ans.push(temp)
//     }
// }

// console.log(ans);


// function CountTotalSubStrings(str) { // return count
//  let n = str.length
//  return (n * (n + 1)) / 2
// }

// console.log(CountTotalSubStrings("abcd"));


// function SubstringOfLengthK(str, k) {
//     let ans = []

//     for (let i = 0; i < str.length; i++) {

//         for(let j = i; j < str.length; j++) {
//             let ss = str.slice(i, j+1)

//             if (ss.length == k) {
//                 ans.push(ss)
//             }
//         }
//     }
//     return ans
// }

// console.log(SubstringOfLengthK("abcdefg", 3));


// function SubstringOfLengthKOneLoop(str, k) {
//     let ans = []
//     let count = 0

//     for (let i = 0; i <= str.length - k; i++) {
//             // console.log("Loop Chala");
//             ans.push(str.slice(i, i + k))
//             // count++
//         }
//         return ans  // return ans.length
//         // return count
//         // return str.length - k + 1
// }

// console.log(SubstringOfLengthKOneLoop("abcdefg", 3));



// function printAllSubstringFromK(str , k) {
//     let ans = []
//     for(let i = k; i < str.length; i++) {
//         for (let j = i; j < str.length; j++) {
//             ans.push(str.slice(i, j+1))
//         }
//     }
//     return ans
// }
// console.log(printAllSubstringFromK("abcde" , 2));

// function printAllSubstringsWhichContainsVowels(str) {
//     let ans = []
//     for(let i = 0; i < str.length; i++) {
//         for(let j = i; j < str.length; j++) {
//              let ss = (str.slice(i , j + 1))
//                  if(ss.includes("a") || ss.includes("e") || ss.includes("i") || ss.includes("o") || ss.includes("u") ) {
//                      ans.push(ss)            
//             }
//         }
//     }
//     return ans
// }
// console.log(printAllSubstringsWhichContainsVowels("abcdefghi"));


// function printAllSubstringsWhichContainsVowels(str) {
//     let ans = []
//     for(let i = 0; i < str.length; i++) {
//         for(let j = i; j < str.length; j++) {
//             for (let k = i; k <= j; k++) {
//                 if (str[k] == "a" || str[k] == "e" || str[k] == "i" || str[k] == "o" || str[k] == "u") {
//                     ans.push(str.slice(i, j + 1))
//                     break;
//                 }
//             }                     
//         }    
//     }
//     return ans
// }
// console.log(printAllSubstringsWhichContainsVowels("hello"));



// function findLargestSubStringContainingVowels (str) {
//     let ans = []
//     for(let i = 0; i < str.length; i++) {
//         for(let j = i; j < str.length; j++) {
//             for (let k = i; k <= j; k++) {
//                 if (str[k] == "a" || str[k] == "e" || str[k] == "i" || str[k] == "o" || str[k] == "u") {
//                     let current = (str.slice(i, j + 1))

//                     if (current == str) {
//                         break;
//                     }

//                     if (current.length > ans.length) {
//                         ans = current
//                         break;
//                     }
//                 }
//             }                     
//         }    
//     }
//     return ans
// }

// console.log(findLargestSubStringContainingVowels("hello"));


// To Print ALl Pailindrome substring
// function printAllPalindromicSS(str) {
//     let ans = []
//     for(let i = 0; i < str.length; i++){
//         for(let j = i; j < str.length; j++) {
//             let sub = str.slice(i, j + 1)
//             if (sub === sub.split("").reverse().join("") ) {
//                 ans.push(sub)
//             }
//         }
//     }
//     return ans
// }
// console.log(printAllPalindromicSS("hello"));



// function printAllSSWithOnlyVowels(str) {
//     let ans = []
//     let vowel ="aeiou"
//     for(let i = 0; i < str.length; i++) {
//         for (let j = i; j < str.length; j++) {
//             let sub = str.slice(i , j + 1)
//             let isvowel = true
//             for (let char of sub) {
//                 if(!vowel.includes(char)) {
//                 isvowel = false
//             }
//             }
//             if (isvowel) {
//                 ans.push(sub)
//             }
//         }
//     }
//     return ans
// }
// console.log(printAllSSWithOnlyVowels("acciojob"));




// function printLargestSSContainingOnlyVowels(str) {
//     let largest = ""
//     let vowel ="aeiou"
//     for(let i = 0; i < str.length; i++) {
//         for (let j = i; j < str.length; j++) {
//             let sub = str.slice(i , j + 1)
//             let isvowel = true
//             for (let char of sub) {
//                 if(!vowel.includes(char)) {
//                 isvowel = false
//             }
//             }
//             if (isvowel) {
//                 if (sub.length > largest.length) {
//                     largest = sub
//                 }
//             }
//         }
//     }
//     return largest
// }
// console.log(printLargestSSContainingOnlyVowels("acciojob"));



function findAllSubstringContainingTargetkTinese(str, target, k) {
    let ans = []
    for(let i = 0; i< str.length - k; i++) {
        let count = 0
        for (let j = i; j < str.length; j++) {
            let sub = str.slice(i , j + 1)
            if (str[j] ==  target) {
                count++
            }
            if (count == k) {
                ans.push(sub)
            }

        }
    }
return ans
}

console.log(findAllSubstringContainingTargetkTinese("ababc", "a", 2));