// let str = "Hello Pragya"
// console.log(str.length)

// let str = "GeeksforGeeks"
// let str = 'aygarP'
// let ans = ''

// for(let i=str.length-1;i>=0;i--){
//     ans += str[i]
// }
// console.log(ans)

// Methods to Remove a Character From a String

// let s = 'pragyaYKushwah'
// let ans = s.replace('Y',"")
// console.log(ans)

// let s = "pragyaKushwah"
// let ans = s.replace(/a/g,"")
// /pattern/g: The regular expression with the g flag (global) to match all occurrences of the specified character or string.
// '': The replacement string (empty string "" to remove the m
// console.log(ans)

// let str = "pragya"
// let ans = str.substring(0,5)
// console.log(ans)

// let str = "Hello pragya"
// let ans = str.slice(0,4) +" "+ str.slice(6,12)
// console.log(ans)

// let str = "Hello pragya"
// let ans = str.split("H").join("")
// console.log(ans)

// let str = "Hello pragya"

// let c = "H"

// let res = str.split("").filter(char=>char !== c).join("")
// console.log(res)

// JavaScript - Delete First Character of a String

// let str = "pragya"
// let str2 = str.slice(1)
// console.log(str2)

// let str = "pragya"
// let str2 = [...str].slice(1).join("")
// console.log(str2)

// let str = "pragya"
// let str2 = str.substring(1)
// console.log(str2)


// JavaScript - Remove Text From a String

// let str = "Hello Guys Pragya kushwah this side!"
// let ans = str.replace('Guys',"")
// console.log(ans)

// let str = "Hello Guys Guys Pragya kushwah this side"
// let ans = str.replace(/Guys/g,"")
// console.log(ans)

// let str = "Hello Guys Pragya kushwah this side"
// let ans = str.split('Guys').join("")
// console.log(ans)


// let str = "Hello pragya";
// let ans = ''

// for(let i=0;i<str.length;i++){
//     ans += str[i]
//     // console.log(str[i])
// }
// console.log(ans)

// for(let char of str){
//     ans += char
// }
// console.log(ans)


// let split = str.split("")
// split.forEach((char)=>console.log(char))

// let str = "hello"
// let reduce = str.split("").reduce((acc,curr)=>acc + curr)
// console.log(reduce)

let str = "pragya"
let result = str.split("").sort().join("")
let usingArrFrom = Array.from(str).sort().join("")
console.log(usingArrFrom)
console.log(result)



