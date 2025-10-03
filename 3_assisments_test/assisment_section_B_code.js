// Conditional:
// Write a function checkNumber(num) that logs:
// "Positive" if num > 0
// "Negative" if num < 0
// "Zero" otherwise.

// function checkNumber(num) {
//   if (num > 0) {
//     console.log("Positive");
//   } else if (num < 0) {
//     console.log("Negitive");
//   } else {
//     console.log("Zero");
//   }
//   return num;
// }

// console.log(checkNumber(-1));


// Loop & Arrow Function:
// Write a function that takes an array of numbers and returns a new array with each number doubled using a forEach loop and arrow function.
// const doubleNumber = (arr)=>{
//   const result = arr.forEach((n)=>n*2)
//   return result
// }
// console.log(doubleNumber([1,2,3]))


// Object Destructuring & Template Literals:

// const user = { name: "John", age: 25 };
// Use destructuring and template literals to log:
// "John is 25 years old."


// const {name,age} = user;
// console.log(`${name} is ${age} year old`)


// DOM Manipulation:

// Write code to select a button with ID #btn and a paragraph with class .msg. When the button is clicked, change the paragraph text to “Button Clicked!”
// const button = document.getElementById('#btn')
// const paragraph = document.getElementsByClassName('.msg')

// button.addEventListener("click",()=>{
//     paragraph.textContent = "Button Clicked!"
// })

// Array Methods:
// Given:

// const numbers = [1, 2, 3, 4, 5];

// Use filter to get even numbers.
// Use reduce to get the sum of numbers.
// Log both results.

// const resultFilter = numbers.filter((num=>num%2===0))
// console.log(resultFilter)
// const resultReduce = numbers.reduce((acc,curr)=>acc+curr)
// console.log(resultReduce)


// Async/Await:
// Write a function that fetches data from https://jsonplaceholder.typicode.com/todos/1 using async/await and logs the JSON response.
// const fetchData = async () => {

//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     if (!response.ok) {
//       throw new Error(`http error status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("data", data);//log the json data
//   } catch (error) {
//     console.error("Error", error);
//   }
// }