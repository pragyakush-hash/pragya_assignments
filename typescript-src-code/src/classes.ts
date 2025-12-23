// //classes
// //declare a class
// // readonly property
// // class fields
// //public, private modifiers
// // private methods
// // getters, setters
// //child class
// //super keyword
// //proted modifier
// //abstract classes interface // only use for 
// //short syntax for constructor method

// class Animal {
//   name: string;
//   age: number;

//   public readonly species: string;
//   public isHungry: boolean = true;
//   constructor(name: string, age: number, species: string) {
//     console.log("constructor called");
//     this.name = name;
//     this.age = age;
//     this.species = species;
//     this.isHungry = true;
//   }

//   hungerStatus(): string {
//     return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`;
//   }
//   // getter and setter access like property
//   get hungerStatus1(): string {
//     return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`;
//   }

//   set feed(food: string) {
//     this.isHungry = false;
//     console.log(`${this.name} has been feed with ${food}`);
//   }

//   get info(): string {
//     return `${this.name} is a ${this.age} year old ${this.species}`;
//   }
// }

// class Dog extends Animal {
//     breed:string;
//     skills:string[];
//     constructor(name:string, age:number,breed:string, skills:string[]){
//         super(name,age,"Dog");
//         this.breed = breed;
//         this.skills = skills;
//     }
// }
// const tom = new Dog("tom",8,"greyhound",["sit","come"])
// console.log(tom.hungerStatus)
// tom.feed = "bread";
// console.log(tom.hungerStatus)



// // console.log(tom.hungerStatus()); // ✅ method
// // tom.feed = "bread";              // ✅ setter
// // console.log(tom.hungerStatus()); // ✅ method


// // const tom = new Animal("Tom", 8, "Dog");

// // tom.name = "tomy";
// // console.log(tom.hungerStatus());
// // console.log(tom.hungerStatus1);




/* =====================================================
   TYPESCRIPT CLASSES – QUICK NOTES
   ===================================================== */

/* 1. Class
   A class is a blueprint to create objects.
*/
// class Person {
//   name1: string;
//   age1: number;
// }

/* ===================================================== */

/* 2. Class Fields (Properties)
   Variables defined inside a class.
*/
// class User {
//   name2: string;
//   age2: number;
//   isActive: boolean = true;
// }

/* ===================================================== */

/* 3. Access Modifiers
   public    → accessible everywhere (default)
   private   → accessible only inside the same class
   protected → accessible in child class
*/
class Employee {
  public name: string;
  private password: string;
  protected salary: number;

  constructor(name: string, password: string, salary: number) {
    this.name = name;
    this.password = password;
    this.salary = salary;
  }
}

/* ===================================================== */

/* 4. readonly Property
   Value can be assigned only once (usually in constructor).
*/
class Account {
  readonly accountNumber: number;

  constructor(accountNumber: number) {
    this.accountNumber = accountNumber;
  }
}

/* ===================================================== */

/* 5. Constructor
   Used to initialize class properties.
*/
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

/* ===================================================== */

/* 6. Short Syntax Constructor
   Automatically creates and assigns properties.
*/
class Student {
  constructor(
    public name: string,
    public age: number,
    readonly id: number
  ) {}
}

/* ===================================================== */

/* 7. Methods
   Functions inside a class.
*/
class Car {
  start(): string {
    return "Car started";
  }
}

/* ===================================================== */

/* 8. Getter and Setter
   Used to control access to private properties.
*/
class Bank {
  private balance: number = 0;

  get getBalance(): number {
    return this.balance;
  }

  set deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }
}

/* Usage */
const acc = new Bank();
acc.deposit = 500;
console.log(acc.getBalance);

/* ===================================================== */

/* 9. Inheritance (Child Class)
   Use extends to inherit parent class.
*/
class Animal {
  move(): string {
    return "Animal is moving";
  }
}

class Dog extends Animal {
  bark(): string {
    return "Dog is barking";
  }
}

/* ===================================================== */

/* 10. super Keyword
   Used to call parent class constructor or methods.
*/
class Person1 {
  constructor(public name: string) {}
}

class Student1 extends Person1 {
  constructor(name: string, public course: string) {
    super(name);
  }
}

/* ===================================================== */

/* 11. protected Modifier
   Accessible only inside class and its child classes.
*/
class Parent {
  protected data: string = "Protected Data";
}

class Child extends Parent {
  showData() {
    return this.data;
  }
}

/* ===================================================== */

/* 12. Abstract Class
   Cannot create object.
   Used to force child classes to implement methods.
*/
abstract class Shape {
  abstract getArea(): number;
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  getArea(): number {
    return this.side * this.side;
  }
}

/* ===================================================== */

/* 13. Interface
   Defines structure only (no implementation).
*/
interface Vehicle {
  speed: number;
  move(): void;
}

class Bike implements Vehicle {
  speed = 60;

  move(): void {
    console.log("Bike is moving");
  }
}

/* ===================================================== */

/* INTERVIEW QUICK POINTS
   - class → blueprint
   - constructor → initialize object
   - readonly → cannot change value
   - public → everywhere access
   - private → same class only
   - protected → child class access
   - extends → inheritance
   - super → parent constructor
   - getter/setter → controlled access
   - abstract class → force implementation
   - interface → structure only
===================================================== */

