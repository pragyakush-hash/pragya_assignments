Here is some basic questions so please share this with all teammates and solve it with one line reason.

Question:
Given the following object, how would you create a deep copy of it so that modifying the nested object in the copy does not affect the original?

const original = { name: "Alice", address: { city: "Paris", zip: 75000 } };
const original = { name: "Alice", address: { city: "Paris", zip: 75000 } };
const deepCopy = structuredClone(original)
deepCopy.address.city = "Indore"
console.log(original)


<!-- Question:
Write a function that reverses a string without using the built-in reverse() method. -->

function reverseString(str) {
    let reversedStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr
}
console.log(reverseString("JavaScript")); // should print "tpircSavaJ"


<!-- Question:
Given an array of numbers, write a function that returns a new array with only even numbers multiplied by 2 using array methods. -->
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.filter(num=>num%2===0).map(n=>n*2)
console.log(result)
// expected output: [4, 8, 12]


<!-- Question:
How can you create an object with keys dynamically based on an array of strings? -->

const keys = ["name", "age", "city"];
const values = ["Alice", 25, "Paris"];
// create an object: { name: "Alice", age: 25, city: "Paris" }


we have 3 methods to do this 
<!-- 1st for loop -->

const keys = ["name", "age", "city"];
const values = ["Alice", 25, "Paris"];
const dynamicallyObject = {}

for (let i =0;i<=keys.length-1;i++){
const key = keys[i]
const value = values[i]
dynamicallyObject[key] = value
}
console.log(dynamicallyObject)

<!-- 2nd  reduce-->
const keys = ["name", "age", "city"];
const values = ["Alice", 25, "Paris"];
const dynamicallyObject = keys.reduce((acc,curr,indx)=>{
acc[curr] = values[indx]
return acc},{})
console.log(dynamicallyObject)

<!-- 3rd forEach-->
const keys = ["name", "age", "city"];
const values = ["Alice", 25, "Paris"];
const dynamicallyObject = {}
keys.forEach((key,index)=>
dynamicallyObject[key] = values[index])
console.log(dynamicallyObject)



<!-- Question:
What will be the output of the following and why? -->
console.log(5 + "5"); 
output = 55 because when we use + operator to add a number and a string they are perform concatenation by using typecoresion.
console.log("5" - 2); //3 
console.log(true + 1); //2
console.log(null == 0); //false

The == operator have a special rule for null and undefined. They are considered as loosely equal to each other but not to any other value, including 0.
dit card
console.log(null === 0); //false


<!-- Question:
Write a closure that keeps track of a counter. Each time the function is called, it should increment and return the counter.const counter = createCounter(); -->

function createCounter (){
    let count = 0;

    function inner (){
        count++
        return count
    }
    return inner
}

const counter = createCounter()
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3



<!-- Question:
What will be logged to the console and why? -->

const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 2;
console.log(obj1.a); 

output is 2
This is the passbyReffrence concept , when we pass object to another object they take it as a reffrence of object . so if we change the value  of another object they also reflected in original object , orignal object is also changed .


<!-- 
Question:
Given an array of objects, find all objects where the age is greater than 18. -->
const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 25 }
];

const result = users.filter((user=>user.age>18))
console.log(result)
// expected output: [{name: "Bob", age: 20}, {name: "David", age: 25}]

<!-- 
Question:
Write a function to capitalize the first letter of each word in a string.function  -->

capitalizeWords(str) {

}
console.log(capitalizeWords("hello world from js")); // "Hello World From Js"


code 
/ let str = "hello world from js"

// let ans = str.split(" ")
// for(let i of ans){
//     console.log(i.slice(0,1).toUpperCase()+i.slice(1,str.length))
// }



Question:
What’s the difference between these two approaches? Which one is shallow and which is deep?
const arr = [[1], [2], [3]];
const copy1 = arr.slice();  slice create a shallow copy
const copy2 = JSON.parse(JSON.stringify(arr)); this are used to create a deep copy