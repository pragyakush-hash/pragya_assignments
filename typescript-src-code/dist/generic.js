//generic
// we use  angle brackets <>
// identity(5)=>5
// identity("hello world")=>"hello world"
// function identity(data: any) {
//   return data;
// }
// console.log(identity(5));
// console.log(identity("heelo world"));
function identity(data) {
    return data;
}
// const val = identity<string>("hello world");
// val.toUpperCase();
//  const val2 = identity<number>(5)
//  val2.toUpperCase() // occuring error
// const val3 = identity<boolean>(true);
function identityWithContrains(data) {
    return data;
}
const val = identityWithContrains("hello pragya");
const val2 = identityWithContrains(5);
// const val3 = identityWithContrains<boolean>(true);
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement(["abcd", "efgh"]));
console.log(getFirstElement([5, 8]));
// pair("hello",5)=>[hello,5]
function pair(key, val) {
    return [key, val];
}
console.log(pair("name", "pragya"));
function getLength(data) {
    return data.length;
}
console.log(getLength([1, 3, 5]));
export {};
