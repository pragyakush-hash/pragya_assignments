# JavaScript Assignments - Operators, Loops, Arrays, Objects

This document contains JavaScript assignment tasks covering operators,
conditional operators, loops, array functions, truthy/falsy values,
optional chaining, and object methods like seal and freeze.

---

## 🟢 Easy Level

1. **Operators Practice**  
   Predict the output of given `console.log` statements:

   - `console.log(3 + 3 * 6 / 6);`  //6
   - `console.log(10 % 4 * 2 + 5);`  //9
   - `console.log(1 + "1" - 1);`  //10
   - `console.log(true + false);`  //1
   - `console.log("5" * 2 + 1);`  //11

2. **Truthy/Falsy Filters**  
    ```js
    const arr = [0, "", null, undefined, NaN, 1, "hello", true, false];
    ```
   - Filter only truthy values from an array.  
   const result = arr.filter(num=>num)
   console.log(result)
   - Filter only falsy values from an array. 
      const result = arr.filter(num=>!num)
   console.log(result)  

3. **Optional Chaining**  
    ``` js
    const user = { profile: { name: "Pablo" } };
    ```
   - Access a property safely when the path exists.  
   const result = user.profile.name
   console.log(result)
   - Try accessing a deeply nested property that doesn’t exist (without throwing error).  
 const result = user.profile.name.a
   console.log(result)
4. **Object Freeze/Seal**  
    ``` js
    const car = { brand: "Tesla", model: "X" };
    ```
   - Create an object and seal it. Try adding and modifying properties.  
   
   const car = { brand: "Tesla", model: "X" };
Object.seal(car);
car.brand = "Ford";       
car.year = 2020;          
console.log(car);
// Output: { brand: "Ford", model: "X" }




   - Freeze the object and try modifying properties.  


Object.freeze(car);
car.brand = "BMW";        
delete car.brand;        
car.color = "red";       

console.log(car);
// Output: { brand: "Ford", model: "X" }

---

## 🟡 Medium Level

1. **Array Functions** 
    ``` js
    const nums = [1, 2, 3, 4, 5];  
    ``` 
   - Given an array of numbers, use `map`, `filter`, and `reduce` in a chain to:  
     - Multiply each number by 2.  
     - Keep only numbers >= 6.  
     - Return the sum of the resulting numbers. 

s
     const result = nums
  .map(num => num * 2)       
  .filter(num => num >= 6)      
  .reduce((acc, num) => acc + num, 0);  

console.log(result);  // Output will be 18

2. **Custom Reduce → Object**  
   - Convert an array of students (e.g., `["Alice", "Bob", "Charlie"]`) into an object where indices are keys.  

   const students = ["Alice", "Bob", "Charlie"];

const result = students.reduce((acc, curr, indx) => {
  acc[indx] = cur;
  return acc;
}, {}); 

console.log(result);

3. **Find Unique Values**  
    ``` js
    const arr = [1, 2, 2, 3, 4, 4, 5];
    ```
   - Given an array with duplicates, return an array of unique values.  
   - Solve once with `filter`.  
   - Solve again with `reduce`.  
   const arr = [1, 2, 2, 3, 4, 4, 5];
   // Using filter 

   const uniqueWithFilter = arr.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueWithFilter); 

// Using reduce 
const uniqueWithReduce = arr.reduce((acc, val) => {
  if (!acc.includes(val)) {
    acc.push(val);
  }
  return acc;
}, []);

console.log(uniqueWithReduce);  // Output: [1, 2, 3, 4, 5]

4. **Dynamic Object Keys**  
    ``` js
    function addKeyValue(obj, key, value) {
      // code here
      obj[key] = value;
      return obj;
    }

    const person = { name: "Pablo" };
    console.log(addKeyValue(person, "age", 25));
    ```
   - Write a function to add a key-value pair to an object.  
   - Test the behavior when the object is sealed.  

Object.seal(person);

console.log("Before sealed add", person);
addKeyValue(person, "age", 25);
console.log("After sealed add:", person);

addKeyValue(person, "name", "Para");
console.log("Modified name in sealed", person);


   - Test the behavior when the object is frozen. 

const person = { name: "Pablo" };
Object.freeze(person);

console.log("Before frozen add", person);
addKeyValue(person, "age", 25); 
addKeyValue(person, "name", "Para");  
console.log("After frozen modify:", person);
//frozen doesn't modify or chnage 
 

---
