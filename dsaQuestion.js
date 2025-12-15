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

