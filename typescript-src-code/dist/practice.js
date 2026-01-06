// Type variables
// let username : string = "pragya";
// let age :  number = 22;
// let isDeveloper : boolean = true;
// console.log(username,age,isDeveloper)
//Type interface
// let city = "Indore";
// console.log(city);
//Array types
// let number: number[] = [1, 2, 3, 4, 5];
// let string: string[] = ["apple", "banana", "orange"];
// console.log(number, string);
//Tuple
// let user: [string, number] = ["Pragya", 22];
// console.log(user)
// Function with types
// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(2, 3));
//Optional parameter
// function optional (name:string,age?:number){
//     return age? `Hello ${name}, age ${age}` : `Hello ${name}`;
// }
// console.log(optional("pragya",22))
//Default parameter
// function optional (name:string,age?:number,phone:number=236598){
//     return age? `Hello ${name}, age ${age} , phone ${phone}` : `Hello ${name}, phone ${phone}`;
// }
// console.log(optional("pragya",22))
//Objects & Type Aliases (IMPORTANT)
//Object typing
// let user: { name: string; age: number } = {
//   name: "pragya",
//   age: 22,
// };
// console.log(user)
//Type alias
// type User = {
//   name: string;
//   age: number;
//   isDeveloper: boolean;
// };
// let developer: User = {
//   name: "pragya",
//   age: 22,
//   isDeveloper: true,
// };
// console.log(developer);
//Array of objects
// type Product = {
//   id: number;
//   title: string;
//   price: number;
// };
// let products: Product[] = [
//   { id: 1, title: "Mobile", price: 20000 },
//   { id: 2, title: "Laptop", price: 50000 },
// ];
// console.log(products);
//Union, Interface & Enums
// let value: string | number;
// value = "Hello";
// value = 100;
// console.log(value);
// interface
// interface Person{
//     name:string;
//     age:number;
// }
// let person : Person={
//     name:"pragya",
//     age:22
// }
// console.log(person)
// enum Status {
//   LOADING,
//   SUCCESS,
//   ERROR,
// }
// let apiSTatus: Status = Status.SUCCESS;
// type Login = {
//   email: string;
//   password: string;
// };
// function login(user: Login): boolean {
//   return user.email === "test@gmail.com" || user.password === "1234";
// }
// console.log(
//   login({
//     email: "test@gmail.com",
//     password: "1234",
//   })
// );
// type User = {
//     name:string;
//     isActive:boolean
// }
// let user:User[]=[
//     {name:"pragya",isActive:true},
//     {name:"Anuja",isActive:false},
// ]
// const result = user.filter((u)=>u.isActive===false)
// console.log(result)
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     return `hello my name is ${this.name}`;
//   }
// }
// const p1 = new Person("pragya", 22);
// console.log(p1.greet());
// class BankAccount {
//     public owner : string;
//     private balance :  number;
//     constructor(owner :string,balance:number){
//         this.owner = owner;
//         this.balance = balance;
//     }
//     getBalance(){
//         return this.balance;
//     }
// }
// const acc = new BankAccount("Pragya",5000);
// console.log(acc.getBalance());
// class User {
//     readonly id:number;
//     name:string;
//     constructor (id:number,name:string){
//         this.id = id;
//         this.name=name;
//     }
// }
// const u1 = new User(1,"Pragya")
// //u1.id = 5
// console.log(u1)
// class Employee {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Developer extends Employee {
//   role: string;
//   constructor(name: string, role: string) {
//     super(name);
//     this.role = role;
//   }
// }
// const dev = new Developer("Pragya", "Frontend");
// console.log(dev);
// Generics (VERY IMPORTANT)
// function identity<T>(value: T): T {
//   return value;
// }
const result = identity("hello");
identity(10);
console.log(result);
function getFirstElement(arr) {
    return arr[0];
}
const result = getFirstElement([1, 2, 3]);
getFirstElement(["a", "b"]);
console.log(result);
export {};
