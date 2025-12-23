//checking sum zero -Problem 1 # array is sorted
//[-5,-4,-3,-2,0,2,4,6,8]

// function getSum(array) {
//   for (let number of array) {
//     for (let j = 1; j < array.length; j++) {
//       if (number + array[j] === 0) {
//         return [number, array[j]];
//       }
//     }
//   }
// }

// const result = getSum([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result); // o(n^2) quadratic time complexity

//undefined appears because getSum() does not return any value.
// In JavaScript, every function returns undefined by default if no return statement is provided.

//checking sum zero -Problem 1 # array is sorted
//[-5,-4,-3,-2,0,2,4,6,8]//
//Another solution

// function findSum(array) {
//   let left = 0;
//   let right = array.length - 1;

//   while (left < right) {
//     sum = array[left] + array[right];
//     if (sum === 0) {
//       return [array[left], array[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// const result = findSum([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);// o(n) liner time complexity

//String Anagaram

//hello -> llleo
// function checkAnagaram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let counter = {};
//   for (let letter of str1) {
//     counter[letter] = (counter[letter] || 0) + 1;
//   }
//   console.log(counter);

//   for (let item of str2) {
//     if (!counter[item]) {
//       return false;
//     }
//     counter[item] -= 1;
//       console.log(counter);

//   }
//   return true;
// }

// console.log(checkAnagaram("hello", "llohe"));

//Count Unique numbers
//[1,1,2,2,3,4,4,5,6,7,8,8] //sorted array

// let arr = [1,1,2,2,3,4,4,5,6,7,8,8]
// let result = [... new Set(arr)]
// console.log(result)

// function countUnique(array) {
//   if (array.length > 0) {
//     let i = 0;

//     for (let j = 1; j < array.length; j++) {
//       if (array[i] !== array[j]) {
//         i++;
//         array[i] = array[j];
//       }
//     }
//     return i + 1;
//   } else {
//     throw new Error("Array is empty");
//   }
// }

// const result = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
// console.log(result);

//[1,2,3,4,3,5,4,6,7,8]==> total element 10

// Count largest sum of consuecutive digits

// 10-4+1=7

// function findLargestSum(array, num) {
//   if (num > array.length) {
//     throw new Error("num is not greater than array length");
//   } else {
//     let max = 0;
//     for (let i = 0; i < array.length - num + 1; i++) {
//       let tmp = 0;
//       for (let j = 0; j < num; j++) {
//         tmp += array[i + j];
//       }
//       if (tmp > max) {
//         max = tmp;
//       }
//     }
//     return max;
//   }
// }

// const result = findLargestSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
// console.log(result, "result");

//Binary search
//DIvide and conquerer technique
// find the index of given no in a sorted array?  7
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] index our is 6

//min=0, element=1
//max=array.length-1, element=15
//minIndex= (min+max)/2 => (0+14)/2=>7 index, 8 elemennt
//if array[minIndex] < number(7)
//min=minINdex+1;
//array[minIndex] > number
// max=minIndex-1    , min=0, max=6 {1,2,3,4,5,6,7}
//min + max /2 =>3

//index+1=>4 (min), max=6
//else minIndex => 6

// function binarySearchMidIndex(array, number) {
//   let min = 0;
//   let max = array.length - 1;
//   while (min <= max) {
//     let midIndex = Math.floor((min + max) / 2);
//     if (array[midIndex] < number) {
//       min = midIndex + 1;
//     } else if (array[midIndex] > number) {
//       max = midIndex - 1;
//     } else {
//       return midIndex;
//     }
//   }
//   return -1;
// }
// const result = binarySearchMidIndex([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],10);
// console.log(result);

// checking square in another array

//arr1=[1,2,3,4], arr2=[1,9,4,16]
//if(array[i]*array[j]===array[j])
// let isSquares=true

// function isSquareCheck(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     let isSquare = false;
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] * arr1[i] === arr2[j]) {
//         isSquare = true;
//       }
//       if (j === arr2.length - 1) {
//         if (!isSquare) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }
// const result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);
// console.log(result);

// Another method of checking square in another array

// function checkSquare(arr1, arr2) {
//   let map1 = {};
//   let map2 = {};

//   for (let item1 of arr1) {
//     map1[item1] = (map1[item1] || 0) + 1;
//   }
//   console.log(map1, "map1");

//   for (let item2 of arr2) {
//     map2[item2] = (map2[item2] || 0) + 1;
//   }
//   console.log(map2, "map2");

//   for (let key in map1) {
//     console.log("key", key);

//     if (!map2[key * key]) {
//       return false;
//     }
//     if (map1[key] !== map2[key * key]) {
//       return false;
//     }
//   }
//   return true;
// }

// const result = checkSquare([1, 2, 4, 2], [1, 4, 4, 16]);
// console.log(result);

// const input = ["apple", "orange", "banana", "apple", "banana"];

// const count = input.reduce((acc, item) => {
//   acc[item] = (acc[item] || 0) + 1;
//   return acc;
// }, {});
// console.log(count);

// const removeDUplicate = [];

// for (let item of input) {
//   if (!removeDUplicate.includes(item)) {
//     removeDUplicate.push(item);
                                                                                                                                                         
//   }
// }
// console.log(removeDUplicate);
// console.log(parseInt('78F'))
// console.log(
//   [1, 2, 3, 4].map((e) => {
//     if (e > 0) return;
//     return e * 10;
//   })
// );clg
// console.log([]===[]) 

