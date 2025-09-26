# JavaScript Fundamentals - Assignments

## 1. Block Scope (`var`, `let`, `const`)

**Code:**
```js
{
  var x = 1;
  let y = 2;
  const z = 3;
}

console.log(x); 
console.log(y); 
console.log(z);
```

**Questions:**
- Which lines will throw errors? Why?

ans- line no.14, and 15 give us error becoz let ans cost have block of scope, we can't access out of the block

- Rewrite the code so all variables are accessible outside the block without errors.
{
  var x = 1;
  var y = 2;
  var z = 3;
}

console.log(x); 
console.log(y); 
console.log(z);

---

## 2. Temporal Dead Zone (TDZ)

**Code:**
```js
console.log(a);
console.log(b);
console.log(c);

var a = 1;
let b = 2;
const c = 3;
```

**Questions:**
- What will be logged?
Undefined
ReffrencError
ReffrencError

- Explain why `b` and `c` behave differently than `a`.

because `b` and `c` are declared with let and const , so let and const are in TDZ when we perform hoisting and they give us ReffrenceError that we can not access before initilization.

---

## 3. Closures

**Code:**
```js
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const c1 = counter();
console.log(c1()); // ?
console.log(c1()); // ?
const c2 = counter();
console.log(c2()); // ?
```

**Questions:**
- What’s the output?

const c1 = counter();
console.log(c1()); // 1
console.log(c1()); // 2
const c2 = counter();
console.log(c2()); // 1

- Why does `c1` keep its own state separately from `c2`?
Not Known



---

## 4. Pass by Value vs Pass by Reference

**Code:**
```js
let num = 10;
let obj = {value: 10};

function changePrimitive(x) {
  x = 20;
}

function changeObject(y) {
  y.value = 20;
}

changePrimitive(num);
changeObject(obj);

console.log(num); // ?
console.log(obj); // ?
```

**Questions:**
- Which value changes and why?
console.log(num); // 10
console.log(obj); // 20

obj Value is changes because value is passed by refrence we can chnage the value of obj they stored the reffrence of object

---

## 5. Type Coercion

**Code:**
```js
console.log(1 + "2");   
console.log("2" * 3);   
console.log(0 == false);  
console.log(0 === false); 
console.log([] == false);
console.log([] === false);
```

**Questions:**
- Predict outputs before running.
console.log(1 + "2");   // 12
console.log("2" * 3); //6  
console.log(0 == false);  //true
console.log(0 === false); // false
console.log([] == false);  // true because [] = "" , "" = 0
console.log([] === false); // false
- Which ones use coercion, and which don’t?

console.log(1 + "2"); , console.log("2" * 3); console.log(0 == false),console.log([] == false);  are use type coercion

---

## 6. Hoisting

**Code:**
```js
sayHello();
console.log(x);

function sayHello() {
  console.log("Hello!");
}

var x = 5;
let y = 10;
```

**Questions:**
- What happens with `sayHello()`?
Hello!
In a case of hoisting when we call a function in console they will give us output because function are hoisted.

- What gets logged for `x`?
Undefined

- What if you also add `console.log(y)` before declaration?

give us ReffrenceError

---

## 7. Objects & References

**Code:**
```js
const obj1 = { name: "Alice" };
const obj2 = obj1;
obj2.name = "Bob";

console.log(obj1.name); // Bob
console.log(obj2.name); //Bob

console.log(obj1 === obj2); 
```

**Questions:**
- Why does changing `obj2` also change `obj1`?

when we assign one obj to another object so they are not created new object or new independent copy of object , they taking as referrencing means exact same as object in memory . so if we chnage in obj2 so obj1 is aldo change

---

## 8. Array Mutation vs Non-Mutation

**Code:**
```js
const arr = [1, 2, 3, 4, 5];
const a = arr.sort();
const b = arr.slice(0, 3);
console.log(a === arr); 
console.log(b === arr);
```

**Questions:**
- Which array methods mutate and which don’t?

Sort method are mutate because they chnage in original array insted of returing new array
and slice are non-mutate because they will return new array insted of changing in original.

- Why does `a === arr` return true, but `b === arr` doesn’t?

beacuse in `a === arr` we check the result they are same so they return true 
console.log([1,2,3,4,5]===[1,2,3,4,5]) //true
console.log([1,2,3]===[1,2,3,4,5]) // false
