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
   - `console.log(true + false);` //1 
   - `console.log("5" * 2 + 1);`  //11

2. **Truthy/Falsy Filters**  
    ```js
    const arr = [0, "", null, undefined, NaN, 1, "hello", true, false];
    ```
   - Filter only truthy values from an array. 
    const result = arr.filter((i)=>i)
    console.log(result) 
   
   - Filter only falsy values from an array.  
    const result = arr.filter((i)=>!i)
    console.log(result)

3. **Optional Chaining**  
    ``` js
    const user = { profile: { name: "Pablo" } };
    ```
   - Access a property safely when the path exists.  
   const ans = user.profile.name
   console.log(ans)

   - Try accessing a deeply nested property that doesn’t exist (without throwing error).  
   const ans = user.profile.name.age.first
   console.log(ans)

4. **Object Freeze/Seal**  
    ``` js
    const car = { brand: "Tesla", model: "X" };
    ```
   - Create an object and seal it. Try adding and modifying properties.  
     const car = { brand: "Tesla", model: "X" };
            Object.seal(car)
            car.model = "Y" 
            car.color = "Black"
            console.log(car)

   - Freeze the object and try modifying properties.  
    const car = { brand: "Tesla", model: "X" };
            Object.freeze(car)
            car.model = "Y" 
            console.log(car)

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

const result = nums.map((i)=>i*2).filter((i)=>i>=6).reduce((acc,curr)=>acc+curr)
console.log(result)

2. **Custom Reduce → Object**  
   - Convert an array of students (e.g., `["Alice", "Bob", "Charlie"]`) into an object where indices are keys.  

const arr = ["Alice", "Bob", "Charlie"]
const result = arr.reduce((acc,curr,indx)=>{acc[indx]=curr
return acc},{})
console.log(result)

3. **Find Unique Values**  
    ``` js
    const arr = [1, 2, 2, 3, 4, 4, 5];
    ```
   - Given an array with duplicates, return an array of unique values.  
   - Solve once with `filter`.  
   - Solve again with `reduce`.  

4. **Dynamic Object Keys**  
    ``` js
    function addKeyValue(obj, key, value) {
      // code here
    }

    const person = { name: "Pablo" };
    console.log(addKeyValue(person, "age", 25));
    ```
   - Write a function to add a key-value pair to an object.  
   - Test the behavior when the object is sealed.  
   - Test the behavior when the object is frozen.  

---
