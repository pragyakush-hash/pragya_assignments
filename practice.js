// let laptop = {
//     brand : "HP"
// }
// console.log(laptop)

// let laptop = new Object()
// laptop.brand = "HP"
// console.log(laptop)

// function Laptop(brand){
//     this.brand = brand
// }
// const laptop = new Laptop("HP")
// console.log(laptop)

// function Laptop(brand){
//   this.brand = brand
// }
// let laptop3 = new Laptop("HP")
// console.log(laptop3)

// class LaptopClass {
//   constructor(brand){
//     this.brand = brand;
//   }
// }

// let laptop4 = new LaptopClass("HP")
// console.log(laptop4)

// const laptopProto = {
//     brand : "HP"
// }

// const laptop = Object.create(laptopProto)
// console.log(laptop.brand)

// String.prototype.reverse = function(){
//     return this.split("").reverse().join("")
// }

// const text = 'JAVASCRIPT'

// console.log(text.reverse())

// function Animal(type){
//     this.type = type;
// }

// Animal.prototype.speak = function(){
//     console.log(this.type + " make a sound")
// }
// Animal .prototype.eat = function(){
//     console.log(this.type + " is eating")
// }

// const dog = new Animal("dog")
// dog.speak()
// dog.eat()
// const person = {
//   name: "Amit",
//   greet: function() {
//     console.log("Hello " + this.name);
//   }
// };
// person.greet()
// const greetFn = person.greet;
// greetFn();

// const person = {
//   name: "Amit",
//   greet: function() {
//     console.log("Hello " + this.name);
//   }
// };

// const greetFn = person.greet.bind(person);
// greetFn();

// class CarClass{
//     constructor(modal,color){
//         this.modal = modal
//         this.color = color
//     }
//     drive(){
//         console.log(this.modal + " driving")
//         console.log(this.color + " pretty")
//     }
// }
// let  car = new CarClass("Audi","Black")
// car.drive()

// const msg=()=>{
//     console.log("done")
// }
// setTimeout(msg,2000)
// msg()

// const delay = (ms)=>{
//     return new Promise(reslove=>setTimeout(reslove,ms))
// }
// // delay(2000).then(()=>{
// //     console.log("done!")
// // })

// const deplayFunction = async()=> {
//     await delay(2000)
//     console.log("done")

// }
// deplayFunction()

// const defaults = { dark: false, lang: "en" };
// const custom = { lang: "fr" };
// const final = { ...defaults, ...custom }; // spread operator
// console.log(final)

// {
//   var x = 1;
//   let y = 2;
//   const z = 3;
// }

// console.log(x);
// console.log(y);
// console.log(z);

// {
//   var x = 1;
//   let y = 2;
//   console.log(y);

//   const z = 3;
//   console.log(z);
// }

// console.log(x);

// console.log(a);
// console.log(b);
// console.log(c);

// var a = 1;
// let b = 2;
// const c = 3;

// function test() {
//   console.log(x);
//   var x = 20;
// }
// test();

// var a = 1;
// function f() {
//   a = 2;
//   console.log(a);
// }
// f();
// console.log(a);

// function outer() {
//   var x = 10;
//   return function() {
//     console.log(x);
//   };
// }
// const fn = outer();
// fn();

// function outer() {
//   var x = 10;
//   return function() {
//     console.log(x);
//     var x = 20;
//   };
// }
// outer()();

// function loop() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 0);
//   }
// }
// loop();

// function loop() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 0);
//   }
// }
// loop();

// console.log(x);
// var x = 1;
// {
//   console.log(x);
//   let x = 2;
// }

// function counter() {
//   let count = 0;
//   return function() {
//     return ++count;
//   }
// }
// const c1 = counter();
// console.log(c1());
// console.log(c1());
// console.log(c1());
// let a = 50;
// function test() {
//   console.log(a);
//   var a = 100;
//   console.log(a);
// }
// test();
// let a = 10;
// {
//   console.log(a);
//   let a = 20;
//   console.log(a);
// }

// 1. In Node.js

// Running this code in Node:

// if (true) {
//   function test() { console.log("inside") }
// }
// test();

// 👉 Result: ReferenceError: test is not defined

// Because Node uses strict mode for modules, and in strict mode:

// Function declarations inside { } are block-scoped, like let

// So:

// test() exists only inside the block

// Outside the block → ❌ test is not accessible.

// ✅ 2. In Browser (non-strict mode, normal <script> tag)

// In the browser (NOT inside "use strict"):

// if (true) {
//   function test() { console.log("inside") }
// }
// test();

// 👉 It PRINTS:

// inside

// Why?

// Because browsers (non-strict mode) use Function Declaration Hoisting (Web Legacy Behavior):

// Functions in blocks become both block-scoped AND var-like global-scoped.

// So in browser sloppy mode:

// test exists inside block + ALSO added to global/window

// This is very old ECMAScript behavior for backward compatibility.

// ⭐ FINAL ANSWER (short)
// If running in Node.js or strict mode
// ReferenceError: test is not defined

// If running in browser (non-strict mode):
//inside

// Golden Rule 1: Always Remember This Simple Order

// You only need to remember 7 groups, not 40 operators.

// ✔ 1. ()
// ✔ 2. ++, -- (prefix), !, typeof
// ✔ 3. * , / , %
// ✔ 4. + , -
// ✔ 5. < , > , <= , >=
// ✔ 6. == , ===
// ✔ 7. && → ||
// ✔ 8. = (assignment)

// That's it.

// ✅ Truth about || and && return values
// 1. || (OR) returns the FIRST truthy value

// OR operator does NOT always return truthy values, it returns:

// ✔ The first truthy value

// OR

// ✔ The last value if ALL are falsy
// Examples:
// console.log(0 || 5);        // 5  (because 5 is first truthy)
// console.log("" || "hello"); // hello
// console.log(null || "x");   // x
// console.log(undefined || 0);// 0 (0 is falsy but it's the last)
// console.log(false || 0);    // 0 (both falsy → last returned)

// ❗ So OR returns truthy OR falsy, depending on the situation.
// 2. && (AND) returns the FIRST falsy value

// AND operator does NOT always return falsy values, it returns:

// ✔ The first falsy value

// OR

// ✔ The last value if ALL are truthy
// Examples:
// console.log(5 && 10);          // 10 (both truthy → last returned)
// console.log("hello" && 0);     // 0 (first falsy)
// console.log(1 && null);        // null (first falsy)
// console.log(true && "yes");    // yes (all truthy)
// console.log("A" && "B" && "C") // C

// ❗ So AND returns truthy OR falsy, depending on the situation.

// OR (||) AND (&&) operator question for practice

// console.log(0 || 5);
// console.log("" || "hello");
// console.log(null || undefined || "JS" || 0);
// console.log(null || undefined || "0" || 0);
// console.log(false && "yes");
// console.log(5 && 0 && 10);
// console.log(0 && 10 && 10);
// console.log(15 && 120 && 10);
// console.log(5 && 10 && 20);
// console.log("hi" || 0 || null);
// console.log("hi" && 0 || 5);
// console.log(0 && 5 || 10);
// console.log(null || false && "abc");
// console.log(1 && 2 && 3 || 4);
// console.log(0 || 1 && 2);
// console.log("" && 5 || "done");
// console.log(10 || (0 && 5));
// console.log((null && 5) || (0 && "x") || 100);
// console.log(null || 0 || 100)
// console.log("a" && "" || "b" && 0 || "c");
// console.log(""|| 0 || "c")
// console.log((1 || 0) && (0 || 2) && ("" || 3));
// console.log(1 && 2 && 3)
// console.log(false || false || false && true || "JS");
// console.log(false || false || false  || "JS");
// console.log((false && 10) || (0 || "hello") && ("" || 5));
// console.log(false  ||   5);

// Just remember this simple line:

// ( ) → Unary → * / → + - → Comparisons → Equality → && → || → =

// This is the “JS PEMDAS” with logic added.
// ()      → 1st
// !, ++   → 2nd
// * /     → 3rd
// + -     → 4th
// > <     → 5th
// == ===  → 6th
// &&      → 7th
// ||      → 8th
// =       → LAST

// 🧠 Highest-level memory trick (super short)
// “BRAHMA SUTRA” LINE (remember this sentence)

// 👉 Brackets, Unary, Multiply, Add, Compare, Equality, AND, OR, Assign

// Or simply:

// BU-MACE-AOA

// Brackets

// Unary

// Multiply / Divide

// Add / Subtract

// Compare (< > <= >=)

// Equality (== ===)

// AND (&&)

// OR (||)

// Assign (=)

// Try saying:
// “BU-MACE-AOA”
// It sticks permanently.

// important  //

// What does typeof return for a function?

// typeof always returns a string describing the type.

// JavaScript has a special rule:

// 🔥 Every function returns "function" with typeof

// (including arrow functions, normal functions, async functions, generator functions)

// Example:

// typeof function() {}      // "function"
// typeof () => {}           // "function"
// typeof async () => {}     // "function"
// // typeof class X {}         // "function"

// const arr = [1,2,3,4]
// console.log(arr.map(val=>val%2===1?"odd":"even"))

// const arr = [1,2,3];
// console.log(arr.map((x, i) => ({index: i, value: x}))); // [{index:0,value:1},{index:1,values:2}]

// const array = [[1,2], [3,4], [5]];
// console.log(array.flat())

// const result = array.map((value,i)=>value[0])
// console.log(result)

// const result = [].concat(...array.map((x)=>x))
// console.log(result)
// const arr = ["a", "b", "c"];
// const arr1 = [1, 2, 3];
// console.log(arr1.map(() => arr1));

// let arr=[-5,-4,-3,-2,0,2,4,6,8];
// find pair of sum is =0

// function findPair(arr){
//     left = 0;
//     right=arr.length-1;
//     while(left<right){
//         sum = arr[left]+arr[right]
//         if(sum===0){
//             return [arr[left],arr[right]];
//         }
//         else if(sum>0){
//             right--
//         }
//         else{
//             left ++
//         }
//     }
// }

// const result = findPair([-5,-4,-3,-2,0,2,4,6,8])
// console.log(result)

//  checking anagram

// function checkingAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let count = {};
//   for (let letter of str1) {
//     count[letter] = (count[letter] || 0) + 1;
//   }

//   for (let letter of str2) {
//     if (!count[letter]) {
//       return false;
//     }
//     count[letter] -= 1;
//   }
//   return true;
// }

// console.log(checkingAnagram("hellow", "ehlowl"));

//Count unique  numbers //time complexity Time Complexity = O(n²) (Quadratic)
//  Space Complexity = O(n) (unique array)

// let arr = [1,1,2,2,3,3,4,4,5,9,6,8,9,10,6,7,8,8];
// let unique = [];
// let count = 0;

// for(let num of arr){
//     if(!unique.includes(num)){
//         unique.push(num)
//         count++
//     }
// }
// console.log(count)
// console.log(unique)

//liner timecomplexity

// function countUnique (array){
// let arr = array.sort();
// console.log(arr,"soretd")
//     if(arr.length>0){
//         let i=0;
//         for(let j=1;j<arr.length;j++){
//             if(arr[i]!==arr[j]){
//                 i++;
//                 arr[i]=arr[j];
//             }
//         }
//         return i;

//     }
//     else{
//         throw new Error("Array is Empty")
//     }
// }
// console.log(countUnique([1,1,2,2,3,3,4,4,5,9,6,8,9,10,6,7,8,8]))

//Recursion :When a function call itself
//otherwise it will get called for infinite time
//If a funtion call itself then there must be an end point.

// let counter = 1;
// function demo(number) {
//   if (counter > number) {
//     return;
//   }

//   console.log("hello pragya ");
//   counter++;
//   demo(number);
// }
// demo(10); //calling

//Sorting array using Recursive Function

// let myArray = [2, 1, 5, 3, 4];
// let myNewList = [];
// let i = 0;
// let j = 1;

// function isSorted(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > array[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// function sortCheck(array) {
//   if (isSorted(array)) {
//     myNewList = array;
//     return;
//   } else if (array[i] < array[j]) {
//     i++;
//     j++;
//     sortCheck(array);
//   } else {
//     [array[i], array[j]] = [array[j], array[i]];
//     i = 0;
//     j = 1;
//     sortCheck(array);
//   }
// }

// sortCheck(myArray);
// console.log(myNewList, "myNew list");

//Helper recursive function
// [1,2,3,4,5,6,7,8,9,10]
// [1,3,5,7,9]

// function findOdd(array) {
//   let result = [];
//   function helperRecursive(inputArray) {
//     console.log("calling!",)
//     if (inputArray.length === 0) {
//       return;
//     }
//     if (inputArray[0] % 2 !== 0) {
//       result.push(inputArray[0]);
//     }
//     helperRecursive(inputArray.slice(1)); // recursively call!
//   }
//   helperRecursive(array); // 1st time calling
//   return result;
// }
// const res = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(res);

// searching

//bubble sort

// function bubbleSorting(array) {
//   for (let i = array.length; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (array[j] > array[j + 1]) {
//         [array[j], array[j + 1]] = [array[j + 1], array[j]];
//       }
//     }
//   }
//   return array;
// }

// const res = bubbleSorting([5, 3, 4, 1, 2, 8, 6, 7]);
// console.log(res);

//Selection sort

// let str = 'pragya'.split("");
// // console.log(str)
//     let result =[]

// for(let i=str.length-1;i>=0;i--){
// result.push(str[i])
//     // console.log(str[i])
// }
// console.log(result.join(""))

// let array = [1,2,5,4,3,6,88,33,44,63,5,7,77,22,3,44,89]
// let arraySorted = array.sort()
// console.log(arraySorted)

// let secongLargetNUmber = 0;

// for(let i=0;i<arraySorted.length-1;i++){
//     if(secongLargetNUmber<arraySorted[i]){
//         secongLargetNUmber = arraySorted[i]
//     }
// }
// console.log(secongLargetNUmber)

// let array = [1, 2, 5, 4, 3, 6, 88, 33, 44, 63, 5, 7, 77, 22, 3, 44, 89];

// let larget = -Infinity;
// let secondLarget = -Infinity;

// for (let num of array) {
//   if (num > larget) {
//     secondLarget = larget;
//     larget = num;
//   } else if (num > secondLarget && num !== larget) {
//     secondLarget = num;
//   }
// }
// console.log(secondLarget)

// function rotateArray(arr,rotatedBy){
//     const n  = arr.length;
//     rotatedBy %= n;

//     return arr.slice(rotatedBy).concat(arr.slice(0,rotatedBy));
// }

// const originalArray = [1,2,3,4,5]
// const rotatedArray = rotateArray(originalArray, 3);
// console.log(rotatedArray);

//Input: [0,1,0,3,12]

// let arr = [0, 1, 0, 3, 12];
// let result = [];
// let allZeros = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] != 0) {
//     result.push(arr[i]);
//   } else {
//     allZeros.push(arr[i]);
//   }
// }
// let ans = [...result,...allZeros]

// console.log(ans)
// console.log(result)
// console.log(allZeros)

// Intersection of arrays
// Input: [1,2,3,4], [3,4,5,6]
// Output: [3,4]

// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];

// let result = [];
// let intersection = [];

// for (let num of arr1) {
//   result.push(num);
// }
// console.log(result);
// for (let i = 0; i < arr2.length; i++) {
//   if (result.includes(arr2[i])) {
//     intersection.push(arr2[i]);
//   }
// }

// console.log(intersection);

// Union of arrays
// Input: [1,2,3], [3,4,5]
// Output: [1,2,3,4,5]

// let arr1 = [1,2,3]
// let arr2 = [3,4,5]
// let result = [...arr1]

// for (let i = 0; i < arr2.length; i++) {
//   if (!arr1.includes(arr2[i])) {
//     result.push(arr2[i]);
//   }
// }
// console.log(result)

// Check sorted array
// Input: [1,2,3,4,5]
// Output: true

// function checkSortedArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkSortedArray([1, 6, 3, 4, 5]));

// Pairs with given sum
// Input: [2,4,3,5,7], sum = 7
// Output: [[2,5],[4,3]]

//Task:

//write a function transform to get below output

//console.log(transform(x));//{name:'abe,age=45}

// function transform(x) {
//   return  x.reduce((acc, curr) => [{...acc, ...curr }], {});
// }
// var x = [{ name: "abe" }, { age: 45 }];
// console.log(transform(x));

// const result = Object.assign(...x);
// console.log(result);

// Array.prototype.gourav = function () {
//   return this.filter((num) => num % 2 === 0);
// };
// var x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(x.gourav());

// need to print array of even num when gourav method is called.

// Pairs with given sum
// Input: [2,4,3,5,7], sum = 7// Output: [[2,5],[4,3]]

// let arr = [2, 4, 3, 5, 7];
// let ansArr = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 1; j < arr.length - 1; j++) {
//     if (arr[i] + arr[j] === 7) {
//       ansArr.push([arr[i], arr[j]]);
//     }
//   }
// }
// console.log(ansArr);

// Chunk array
// Input: [1,2,3,4,5,6], size = 2
// Output: [[1,2],[3,4],[5,6]]

// Flatten array (1 level)
// Input: [1,[2,3],[4,5]]
// Output: [1,2,3,4,5]

//let arr = [1, [2, 3], [4, 5]];

// let result = arr.flat()
// console.log(result)
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     res.push(arr[i]);
//   } else {
//     for (let j = 0; j < arr[i].length; j++) {
//       res.push(arr[i][j]);
//     }
//   }
// }

// console.log(res);

// using recursion

// let arr = [1, [2, 3], [4, 5]];
// let res = [];

// function flated(arr) {
//   for (let item of arr) {
//     if (typeof item === "number") {
//       res.push(item);
//     } else {
//       flated(item);
//     }
//   }
//   return res;
// }
// flated(arr);
// console.log(res);

// Frequency count
// Input: [1,2,2,3,3,3]
// Output: {1:1, 2:2, 3:3}

// let arr = [1, 1, 2, 2, 3, 3, 3];
// let resultObj = {};

// for (let count of arr) {
//   resultObj[count] = (resultObj[count] || 0) + 1;
// }
// console.log(resultObj);

// Remove duplicates
// Input: [1,2,2,3,4,4]
// Output: [1,3]

// let arr = [1, 2, 2, 3, 4, 4];
// let ans = [];
// let result = {};
// for (let count of arr) {
//   result[count] = (result[count] || 0) + 1;
// }
// console.log(result);

// for (let keys in result) {
//   if (result[keys] === 1) {
//     ans.push(Number(keys));
//   }
// }
// console.log(ans);

// Missing number (1–n)
// Input: [1,2,4,5]
// Output: 3

// function findMissingNumber(arr) {
//   const n = arr.length + 1;

//   const expectedSum = (n * (n + 1)) / 2;

//   const actualSum = arr.reduce((sum, current) => sum + current, 0);
//   return expectedSum - actualSum;
// }

// const input = [1, 2, 3, 4, 5, 7];
// const missingNumber = findMissingNumber(input);
// console.log("Output Missing NUmber: " + missingNumber);

// First non-repeating element
// Input: [9,4,9,6,7,4]
// Output: 6

// const array = [9, 4, 9, 6, 7, 4];
// const nonRepeatedVal = {};

// for (let num of array) {
//   nonRepeatedVal[num] = (nonRepeatedVal[num] || 0) + 1;
// }

// for(let keys in nonRepeatedVal){
//     if(nonRepeatedVal[keys]===1){
//          console.log(keys)
//     }
// }
// console.log(nonRepeatedVal);

// Even first, odd later
// Input: [1,2,3,4,5,6]
// Output: [2,4,6,1,3,5]

let arr = [1, 2, 3, 4, 5, 6];
// let even = [];
// let odds = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     even.push(arr[i])
//   }
//   else{
//     odds.push(arr[i])
//   }
// }
// console.log([...even,...odds])
// console.log(odds)

// let pos = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     let temp = arr[i];
//     arr[i] = arr[pos];
//     arr[pos] = temp;
//     pos++;
//   }
// }
// console.log(arr)


// Max subarray sum
// Input: [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6




