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
// typeof class X {}         // "function"






