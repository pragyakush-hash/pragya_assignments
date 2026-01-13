console.log({}=={})
//return false because object are compared by reference not by value.
// The == (loose equality) operator, when comparing objects,
//  checks if the two operands refer to the exact same object in memory.
// Since `{} ` and `{} ` create two different objects,
// the comparison {} == {} evaluates to false.

let obj1 = {};
let obj2 = {};
let obj3 = obj1;

console.log(obj1 == obj2); // false (different objects)
console.log(obj1 == obj3); // true (same object reference)

const arr = [5,4,3,2,1];
const a = arr.sort()
console.log(a === arr); // true (sort original array)
// In JavaScript, the sort() method sorts the elements of an array in place.
//  This means it modifies the original array directly,
//  rather than creating a new array with the sorted elements.

const arr1 = [5,4,3,2,1];
const a1 = arr1.slice(0, 3)
console.log(a1) // [5,4,3]
1
const arr2 = [5,4,3,2,1]
const a2 = arr2.splice(1,3,"9")
console.log("a2",a2)