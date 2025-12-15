// 50 JavaScript Interview Questions (Array + String Only)

// Section 1: Basic Array Questions (Fresher Level)

// 1. WHAT IS AN ARRAY IN JAVASCRIPT?

// -> An array in JavaScript is a special type of object used to store multiple values in a single variable, arranged in an ordered list. Each value inside the array is called an element, and every element has a numeric index starting from 0.

// 2.DIFFERENCE BETWEEN MAP() AND FOREACH()?

// 👉 map() is used when you want to return a new transformed array.
// 👉 forEach() is used when you only want to loop and perform an action.

// forEach always returns undefined

// return inside callback does NOT stop loop

// { } requires return to return a value

// Implicit return only works without {}

// You cannot break or continue

// Empty array holes are skipped

// Acts only for side effects, not transformations
// const nums = [1,2,3,4,5]
// const squared = nums.map((n)=>n*n)
// console.log(squared)

// const users = [
//   { name: "Amit", age: 20 },
//   { name: "Riya", age: 22 }
// ];

// const names= users.map(user=>user.name)
// console.log(names)

// //forEach

// const values = [10,20,30,40]
// values.forEach((n)=>console.log(n))

// const numbers = [1,2,3,4]
// const result = numbers.forEach((n)=>n*2)
// console.log(result) //undefined

// const doubled = []
// numbers.forEach((n)=>doubled.push(n*2))
// console.log(doubled) // [ 2, 4, 6, 8 ]

// const arr = [1, 2, 3];

// arr.forEach(num => {
//   return num * 2;
// });

// arr.forEach(num => console.log(num * 2));

// arr.forEach((num, index) => {
//   arr[index] = num * 10;
// });

// console.log(arr);

// 3.WHAT DOES PUSH() AND POP() DO?

// push() adds elements at the end of an array and returns new length.
// pop() removes the last element of an array and returns the removed element.

// const arr = [1, 2, 3];
// arr.push(4);

// console.log(arr); // [1, 2, 3, 4]

// const names = ["Amit", "Riya"];

// const newLength = names.push("Karan", "Sia");

// console.log(names);     // ["Amit", "Riya", "Karan", "Sia"]
// console.log(newLength); // 4

// const arr2 = [10, 20, 30];

// const removed = arr2.pop();

// console.log(arr2);     // [10, 20]
// console.log(removed); // 30

// const nums = [5, 6, 7];

// console.log(nums.pop()); // 7
// console.log(nums.pop()); // 6
// console.log(nums);       // [5]

// 4.WHAT IS THE DIFFERENCE BETWEEN SLICE() AND SPLICE()?

// slice() copies part of an array without changing it,
// while splice() modifies the original array by adding, removing, or replacing elements.

// example of slice -
// const arr = [10, 20, 30, 40];

// const result = arr.slice(1, 3);

// console.log(result); // [20, 30]
// console.log(arr);    // [10, 20, 30, 40]
// console.log(arr.slice(2))
// console.log(arr.slice(3))

// example of splice

// // array.splice(start, deleteCount, item1, item2, ...)

// //Remove items
// const arr = [1, 2, 3, 4];

// const removed = arr.splice(1, 2);

// console.log(removed); // [2, 3]
// console.log(arr);     // [1, 4]  (modified)

// //Add items
// const arr2 = [10, 20, 40];

// arr2.splice(2, 0, 30);

// console.log(arr2);   // [10, 20, 30, 40]

// //Replace items
// const arr3 = [1, 2, 3];

// arr3.splice(1, 1, 99);

// console.log(arr3); // [1, 99, 3]

// //practice question slice() vs splice()

// const arr1 = [1, 2, 3, 4];
// console.log(arr1.slice(1, 3)); //[2,3]
//             //0    1   2   3
// const arr2 = [10, 20, 30, 40];
// console.log(arr2.splice(1, 2));//[20,30]
// console.log(arr2);//[10,40]

//              //0    1    2    3
// const arr3 = ["a", "b", "c", "d"];
// const x = arr3.slice(2); //
// console.log(x, arr3);// [ 'c', 'd' ] , ["a", "b", "c", "d"];

//             //0  1  2  3
// const arr4 = [5, 6, 7, 8];
// arr4.splice(2, 0, 100);
// console.log(arr4); //[ 5, 6, 100, 7, 8 ]

// const arr5 = [1, 2, 3, 4, 5];
// console.log(arr5.slice(-2)); //[4,5]

// const arr6 = [9, 8, 7, 6];
// const y = arr6.splice(-2, 1);
// console.log(y, arr6);//[ 7 ] [ 9, 8, 6 ]

// const arr7 = [1, 2, 3, 4];
// arr7.slice(1, 3).push(100);
// console.log(arr7); //[ 1, 2, 3, 4 ]

// const arr8 = ["x", "y", "z"];
// const removed1 = arr8.splice(1, 0, "new");
// console.log(removed1, arr8);//[] [ 'x', 'new', 'y', 'z' ]

// const arr9 = [1, 2, 3, 4, 5];
// arr9.splice(1, 3, 99);
// console.log(arr9); //[ 1, 99, 5 ]

// const arr10 = ["A", "B", "C", "D"];
// const a = arr10.slice(1, 2);
// const b = arr10.splice(1, 2);
// console.log(a, b, arr10);
// //[ 'B' ] [ 'B', 'C' ] [ 'A', 'D' ]
// console.log(arr10.slice(1, 2),"hello1")
// console.log(arr10.splice(1, 2),"hello2")

// // const a = [1, 2, 3, 4, 5];
// // console.log(a.slice(1, 3)); // [2,3]

// // const a = [10, 20, 30, 40];
// // console.log(a.slice(0));//[10,20,30,40]

// // const a = [7, 8, 9];
// // console.log(a.slice(-1));//[9]

// // const a = [11, 22, 33, 44, 55];
// // console.log(a.slice(-3));//[ 33, 44, 55 ]

// // const a = [1, 2, 3, 4];
// // console.log(a.slice(1, -1));//[2,3]

// // const a = [5, 10, 15, 20];
// // console.log(a.slice(-4, -2));//[5,10]

// --------------------------
//     // const a = [100, 200, 300, 400];
//     // console.log(a.slice(5));//[]

// //     const a = [1, 2, 3];
// // console.log(a.slice(0, 10));//[ 1, 2, 3 ]

// //SPLICE() Practice

// // const a1 = [1, 2, 3, 4];
// // console.log(a1.splice(1, 2)); //[ 2, 3 ]
// // console.log(a1);//[ 1, 4 ]

// // const a = [10, 20, 30];
// // console.log(a.splice(0, 1));//[ 10 ]
// // console.log(a);//[ 20, 30 ]

// 5.HOW TO CHECK IF A VARIABLE IS AN ARRAY?

// Array.isArray() (MOST ACCURATE)

// ✔ Works in all modern browsers
// ✔ Correct even when arrays come from different frames/iframes

// 6. WHAT DOES THE LENGTH PROPERTY RETURN?

// The length property returns the number of elements in an array, which is the highest index + 1. It includes empty slots and updates dynamically as items are added or removed (except delete).

// 7.HOW TO CONVERT AN ARRAY TO A STRING?

// 1. Using toString()

// Converts the array into a comma-separated string.

// const arr = [1, 2, 3];
// console.log(arr.toString()); // "1,2,3"

// 2. Using join() (BEST & MOST FLEXIBLE)

// You can choose any separator.

// Default (comma):
// const arr = [1, 2, 3];
// console.log(arr.join()); // "1,2,3"

// 3. Using String()

// Works similarly to toString().

// const arr = [1, 2, 3];
// console.log(String(arr)); // "1,2,3"

// 4. Using JSON.stringify()

// Converts the array to a valid JSON string
// (keeps brackets and quotes).

// const arr = ["a", "b", "c"];
// console.log(JSON.stringify(arr)); // '["a","b","c"]'

// Useful when sending data to backend.

// ➕ 5. Convert each element and then concatenate

// (rarely needed)

// const arr = [1, 2, 3];
// console.log(arr + ""); // "1,2,3"

// Using + "" forces type-coercion.

// You can convert an array to a string using toString(), join(), String(), or JSON.stringify(). The most flexible method is join() because it allows custom separators.

// 8. What is array destructuring?

// Array destructuring is a short and cleaner way to extract values from an array and store them into variables.

// Array Destructuring (Easy way)
// const arr = [10, 20, 30];

// const [a, b, c] = arr;

// console.log(a, b, c); // 10 20 30

// Because it makes code:

// ✔ shorter
// ✔ cleaner
// ✔ easier to read
// ✔ useful in React (props, useState)

// Examples of Array Destructuring
// 1️⃣ Basic destructuring
// const [x, y] = [1, 2];
// console.log(x, y); // 1 2

// 2️⃣ Skipping elements
// const arr = [10, 20, 30, 40];

// const [first, , third] = arr;

// console.log(first, third); // 10 30

// 3️⃣ Rest operator (…) with destructuring

// Collect remaining values into an array.

// const arr = [1, 2, 3, 4, 5];

// const [a, b, ...rest] = arr;

// console.log(a);    // 1
// console.log(b);    // 2
// console.log(rest); // [3, 4, 5]

// 4️⃣ Default values

// Used when an element is missing.

// const arr = [1];

// const [a = 10, b = 20] = arr;

// console.log(a, b); // 1 20

// 5️⃣ Swap variables (BEST trick)
// let a = 5;
// let b = 10;

// [a, b] = [b, a];

// console.log(a, b); // 10 5

// 6️⃣ Nested Destructuring
// const arr = [1, [2, 3]];

// const [a, [b, c]] = arr;

// console.log(a, b, c); // 1 2 3

// 7️⃣ Destructuring in functions (React useState example)
// const [count, setCount] = useState(0);

// React hooks always use array destructuring.

// 🎯 Interview Answer

// Array destructuring is a syntax that allows you to unpack values from an array into individual variables easily. It supports skipping values, default values, nested arrays, rest operator, and even swapping variables.

// // const arr = [2, 4, 6];
// // const result = arr.map(x => x / 2);
// // console.log(result) // [1,2,3]

// // Use map() to convert an array of numbers into their squares.

// // const arr = [2, 4, 6];
// // const result = arr.map(x => x * x);
// // console.log(result) // [4,16,36]

// // const arr = [1, 2, 3];
// // console.log(arr.map((x, i) => x * i));//[0,2,6]

// //Use map() to convert this array of objects into an array of ages:
// // const users = [{age:10}, {age:20}, {age:30}];

// // const result = users.map((values)=>values.age)
// // console.log(result)

// // console.log([null, undefined, 5].map(x => x)); // [ null, undefined, 5 ]

// // Use map() to add 5 to every value in the array [10, 20, 30].
// // const array = [10,20,30]
// // console.log(array.map((val)=>val+5))

// // const arr = ['a', 'b', 'c'];
// // console.log(arr.map(() => 'x')) //[ 'x', 'x', 'x' ]

// // const array = ["ram", "shyam", "mohan"]
// // console.log(array.map((val)=>val.toUpperCase()))

// // const arr = [1, 2, 3];
// // console.log(arr.map(x => ({num: x}))); //[ { num: 1 }, { num: 2 }, { num: 3 } ]

// // const products = [
// //   { name: "A", price: 100 },
// //   { name: "B", price: 200 },
// // ];
// // console.log(products.map((value)=>value.price))

// //filter questions

// // console.log([0, "", "hello", null, 5].filter(Boolean)); //filter -filter gives always truthy values

// // Use filter() to remove values less than 10 from this array:
// // const arr = [5, 8, 10, 15, 20]
// // console.log(arr.filter(value=>value > 10))

// // const arr = ["apple", "banana", "kiwi"];
// // console.log(arr.filter(item => item.length > 4));

// // const users = [
// //   { name: "A", age: 15 },
// //   { name: "B", age: 20 },
// //   { name: "C", age: 30 },
// // ];
// // console.log(users.filter((user)=>user.age > 18))

// // const arr = [1, 2, 3, 4];
// // console.log(arr.filter(( x,i) => i % 2 === 1));

// // const array = [0, 1, false, 2, "", 3, null]
// // console.log(array.filter((val)=>val)) //remove falsy values

// // const array = [0, 1, false, 2, "", 3, null]
// // console.log(array.filter((val)=>!val)) // !-> not for falsy values

// // const names = ["Aman", "Ravi", "Ankit", "Sohan"];
// // console.log(names.filter((name)=>name.startsWith('A',0)))

// //What does includes() do?

// includes() checks whether an array or string contains a specific value.
// It returns true or false.

// includes() for Arrays
// ✔ Syntax
// array.includes(value, startIndex)

// value → the item you want to search

// startIndex (optional) → from which index to start searching (default = 0)

// Using Start Index
// console.log(arr.includes(2, 2));

// Output: false
// Because search starts from index 2, and from index 2 onward, 2 is not found.

// Basic String Search
// const name = "javascript";
// console.log(name.includes("java"));

// ✔ Output: true

// Example 2: Case-sensitive
// console.log(name.includes("Java"));

// ❌ Output: false
// (Because J is capital — includes is case sensitive)

// SECTION 2: BASIC STRING QUESTIONS (FRESHER LEVEL)

// A string in JavaScript is a sequence of characters used to store and represent text.
// It can contain:

// letters → "hello"

// numbers → "123"

// symbols → "@#%$"

// spaces → "hello world"

// even emojis → "😀🔥"

// 🔥 1. String Creation Methods
// Method	Description
// String()	Convert a value to string
// toString()	Convert value/object to string
// 🔥 2. Checking & Searching
// Method	What it Does
// includes()	Checks if substring exists → returns true/false
// startsWith()	Checks if string starts with given substring
// endsWith()	Checks if string ends with given substring
// indexOf()	Returns index of first match (or -1)
// lastIndexOf()	Returns index of last match
// search()	Searches using regex
// match()	Returns matched result using regex
// matchAll()	Returns iterator of all regex matches
// localeCompare()	Compares two strings (sorting)
// 🔥 3. Extracting / Slicing
// Method	Description
// slice(start, end)	Extracts from start to end (not included)
// substring(start, end)	Similar to slice but no negative values
// substr(start, length)	Extracts by length (deprecated but works)
// 🔥 4. Modifying / Replacing
// Method	Description
// replace(from, to)	Replaces first match
// replaceAll(from, to)	Replaces all matches
// toUpperCase()	Convert to uppercase
// toLowerCase()	Convert to lowercase
// trim()	Removes spaces (start + end)
// trimStart() / trimLeft()	Removes left-side spaces
// trimEnd() / trimRight()	Removes right-side spaces
// padStart(length, padText)	Pads string on left side
// padEnd(length, padText)	Pads string on right side
// repeat(n)	Repeats string n times
// 🔥 5. Splitting & Joining
// Method	Description
// split(separator)	Split string into array
// 🔥 6. Character Methods
// Method	Description
// charAt(index)	Returns character at index
// charCodeAt(index)	Returns Unicode value
// codePointAt(index)	Returns full Unicode code point
// fromCharCode()	Convert Unicode → character
// fromCodePoint()	Convert Unicode (full) → character
// 🔥 7. String Formatting
// Method	Description
// concat()	Join strings (not commonly used)
// normalize()	Unicode normalization
// 🔥 8. Template Strings (Backticks)

// (Not methods but important)

// Feature	Description
// ${ }	Expression interpolation
// `Hello`	Multi-line strings
// Tagged templates	func\Hello ${name}``
// 🔥 9. Rare but Valid String Methods
// Method	Description
// valueOf()	Primitive string value
// anchor()	Creates HTML anchor (deprecated)
// bold()	<b> text (deprecated)
// italics()	<i> text (deprecated)
// link()	<a href> (deprecated)
// small()	<small> tag (deprecated)
// strike()	<strike> text (deprecated)
// big()	<big> tag (deprecated)
// fontcolor()	<font color> (deprecated)
// fontsize()	<font size> (deprecated)
// 🎯 Final Summary (Interview Line)

// JavaScript Strings come with methods for searching, slicing, formatting, modifying, padding, trimming, matching, and Unicode handling. They are immutable, so all methods return new strings.

// slice() vs substring() vs substr() — with examples and interview-ready explanations.

// 🔥 1. slice(start, end)

// ✔ Works with positive & negative indexes
// ✔ Extracts from start to end (not included)
// ✔ Does NOT modify original string

// Example:
// "JavaScript".slice(4, 10)

// Output:

// Script

// Negative index:
// "JavaScript".slice(-6)

// Output:

// Script

// 🔥 2. substring(start, end)

// ✔ Works ONLY with positive values (negative becomes 0)
// ✔ Extracts from start to end (end not included)
// ✔ If start > end → it swaps them

// Example:
// "JavaScript".substring(4, 10)

// Output:

// Script

// Negative index becomes 0:
// "JavaScript".substring(-3, 4)

// Output:

// Java

// Swaps values:
// "JavaScript".substring(10, 4)

// Output:

// Script

// 🔥 3. substr(start, length) (DEPRECATED but still used)

// ✔ 2nd argument is length, not end index
// ✔ Supports negative start
// ❌ Deprecated — should avoid in new code

// Example:
// "JavaScript".substr(4, 6)

// Output:

// Script

// Negative index:
// "JavaScript".substr(-6, 6)

// Output:

// Script

// 🎯 Interview-Friendly 1-liner Explanation

// slice() → supports negative indexes, arguments not swapped.
// substring() → does not support negative, swaps start & end.
// substr() → 2nd argument is length; deprecated.

// //How to reverse a string?

// const str = 'pragya'
// let ans = ''
// for(let i = str.length-1; i>=0;i--){
//     ans += str[i]
// }
// console.log(ans)

// /*console.log("JavaScript".includes("script"));
// console.log([NaN].includes(NaN));
// const arr = ["a", "b", "c", "d"];
// console.log(arr.includes("a", 1));*/

// //2. Using split(), reverse(), join() (Most common)
// // const str = 'pragya';
// // const reversed = str.split('').reverse().join('')
// // console.log(reversed)

// //3. Using a for...of loop

// // const str = 'pragya'
// // let result = '';
// // for (let ch of str) {
// //   result = ch + result;
// // }
// // console.log(result);

// var a = 12;
// console.log(a * 12);
// console.log(a ** 2);
//
// "use strict";
// function test() {
//   salary = 123654;
//   console.log(salary);
// }
// test();
