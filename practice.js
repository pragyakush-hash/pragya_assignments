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
