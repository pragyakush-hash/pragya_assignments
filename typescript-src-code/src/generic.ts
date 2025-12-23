//generic

// we use  angle brackets <>

// identity(5)=>5
// identity("hello world")=>"hello world"

// function identity(data: any) {
//   return data;
// }

// console.log(identity(5));
// console.log(identity("heelo world"));

function identity<CustomType>(data: CustomType) {
  return data;
}
// const val = identity<string>("hello world");

// val.toUpperCase();

//  const val2 = identity<number>(5)
//  val2.toUpperCase() // occuring error

// const val3 = identity<boolean>(true);

function identityWithContrains<T extends string | number>(data: T): T {
  return data;
}

const val = identityWithContrains<string>("hello pragya");
const val2 = identityWithContrains<number>(5);
// const val3 = identityWithContrains<boolean>(true);


function getFirstElement<T>(arr:T[]):T{
  return arr[0]
}

console.log(getFirstElement<string>(["abcd","efgh"]))
console.log(getFirstElement<number>([5,8]))

// pair("hello",5)=>[hello,5]

function pair <T,U>(key:T,val:U):[T,U]{
  return [key,val]
}

console.log(pair("name","pragya"))


function getLength<T extends { length:number}>(data:T): number{
  return data.length
}

console.log(getLength([1,3,5]))