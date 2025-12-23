type Person = {
  firstName: string;
  lastName: string;
  age?: number; // using ? for making key optipnal
};

const person: Person = {
  firstName: "pragya",
  lastName: "kushwah",
  age: 22,
};
// person.age = "hhh";

// interface
interface Person1 {
  firstName: string;
  lastName: string;
  age?: number; // using ? for making key optipnal
}

const person1: Person1 = {
  firstName: "pragya",
  lastName: "kushwah",
  age: 22,
};

// diffrence between type and interface

// interface using for objects
// in interface name start with capital letter and again we open interface and adding some 
// and more properties , we can add nested object properties,
// we can create diffrent files  for interfaces using import  export 


// types are uses for many like objects, arrays, tuples , primitives tpes
// in types we can not ading more properties in types occuring error duplicate identifier
