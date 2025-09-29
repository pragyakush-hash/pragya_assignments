# 📝 JavaScript Assignment – Shallow copy, deep copy, Prototypes, Destructuring, this keyword, class, function constructor 

---

## 🟢 Easy Level

### 1. Shallow vs Deep Copy
```js
let obj = { x: 1, y: { z: 2 } };
let copy1 = { ...obj };
let copy2 = structuredClone(obj);

copy1.y.z = 50;
copy2.y.z = 100;

console.log(obj.y.z); 
// Predict the output?
In shallow copy = 50;
In deep copy = 2
```

---

### 2. Array Destructuring
```js
const nums = [5];
const [a=1, b=2, c=3] = nums;
console.log(a, b, c); 
// What will be logged?

console.log(5,2,3)
```

---

### 3. Object Destructuring
```js
const student = { id: 1, name: "Ravi" };
const { id, name, grade="A" } = student;
console.log(id, name, grade);
// What is grade value?
```
console.log(1, Ravi, A)

---
s
### 4. String Reverse
- Implement a function that reverses `"JavaScript"` using the custom `.reverse()` method.  

String.prototype.reverse = function (){
    return this.split("").reverse("").join("")
}

const text = "Javascript"
console.log(text.reverse())
---

### 5. String Methods
```js
console.log("  hello world  ".trim().toUpperCase().slice(0,5));
// What will be the output? 
output : HELLO
```

---

## 🟡 Medium Level  

### 6. Prototype Inheritance
```js
function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function() {
  console.log(this.type + " makes a sound");
};

const dog = new Animal("Dog");
dog.speak();
```

- What will be logged?  

ans : - Dog makes a sound

- Add another method `eat()` in prototype that logs `"Dog is eating"` and call it.  

function Animal(type) {
  this.type = type;
}
Animal.prototype.eat = function() {
  console.log(this.type + " is eating");
};

const dog = new Animal("Dog");
dog.eat();

---

### 7. `this` Keyword
```js
const person = {
  name: "Amit",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

const greetFn = person.greet;
greetFn(); 
```

- Why does this print `undefined`?  
In strict mode this value become undefined because we don't  accidentally change the global object and our code safe and predictable.

- Fix it using `.bind()`.  
const person = {
  name: "Amit",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

const greetFn = person.greet.bind(person);
greetFn(); 


// In bind this will always refer to person even if the function is called separately

---

### 8. Class vs Constructor
- Write a **constructor function** and a **class** for `Book` with properties: `title`, `author`.  
- Add a method `getDetails()` in both which returns `"title by author"`.  
- Create 2 objects and call the method.  

---
function Book(title,author) {
  this.title = title;
  this.author = author;

}
Book.prototype.detail = function() {
  console.log(this.title + " by" + " "+ this.author);
};
let book1 = new Book("Malgudi Days", "R.K. Narayan");
book1.detail();

class BookClass {
  constructor(title,author) {
this.title = title;
  this.author = author;  }
  detail() {
    console.log(this.title + " by" + " "+  this.author);
  }
}
let book2 = new BookClass("The God of Small Things", "Arundhati Roy");
book2.detail();

### 9. Array Functions
- Write code using:
  - `map()` → multiply every element in `[1,2,3,4]` by 3.  
  - `filter()` → keep only even numbers.  
  - `reduce()` → find sum of all elements.  

  let arr = [1,2,3,4]
let result = arr.map((item)=>item*3).filter((item)=>item%2===0).reduce((acc,curr)=>acc+curr)
console.log(result)

---

### 10. Ways to Create Objects
- Create an object representing a `Laptop` using all **5 ways** (Literal, `new Object()`, Constructor, Class, `Object.create()`).  
- Each object should have a property `brand` = `"HP"`.  

---
//literal
let laptop1 = {
  brand:"HP"
}
console.log(laptop1)

// new object

let laptop2 = new Object();
laptop2.brand = "HP"
console.log(laptop2)

//constructor

function Laptop(brand){
  this.brand = brand
}
let laptop3 = new Laptop("HP")
console.log(laptop3)

// Class

class LaptopClass {
  constructor(brand){
    this.brand = brand;
  }
}

let laptop4 = new LaptopClass("HP")
console.log(laptop4)

//Object.create()

const laptopProto = {
  brand: "HP"
};
const laptop5 = Object.create(laptopProto);

console.log(laptop5);        // {}   (empty, no own properties)
console.log(laptop5.brand);  // "HP" (found in prototype)


✅ Attempt all the questions. Later, a solution sheet will be provided for verification.  