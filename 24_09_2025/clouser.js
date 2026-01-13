// function outer(){
//     let count = 0;

//     function inner(){
//         count++;
//         console.log(count)
//     }

//     return inner;
// }

// const myFunc = outer()
// myFunc()
// myFunc()
// myFunc()

// console.log(myFunc())
// console.log(myFunc())
// console.log(myFunc())


//HOF

// function makeMultiplier (x){ //x=2
//     return function(y){
//         return x*y  
//         // return hota hai inner function y = 2 * y
//     }
// }

// const double = makeMultiplier(2) //Matlab double = (y) => 2 * y
// const triple = makeMultiplier(3) //Matlab triple = (y) => 3 * y

// console.log(double(5)) //10 //double ke closure me x = 2 fixed hai.
// // y=5 Calculation = 2 * 5 = 10.
// console.log(triple(10)) //30 // triple ke closure me x = 3 fixed hai.
//Ab y = 5. Calculation = 3 * 5 = 15. Output: 15

// function seceretPassword (){
//     let password = '1234'
//     return {
//         getPassword : function(){
//             return password
//         },
//         setPassword : function(newPassword){
//             password = newPassword

//         }
//     }
// }
// const user = seceretPassword ();
// console.log(user.getPassword())
// user.setPassword("abcd")
// console.log(user.getPassword())

    // const arr = [0, "", null, undefined, NaN, 1, "hello", true, false];
    // const result = arr.filter((i)=>!i)
    // console.log(result)

        // const user = { profile: { name: "Pablo" } };

        // const ans = user.profile.name.age.first
        // console.log(ans)

            // const car = { brand: "Tesla", model: "X" };
            // Object.freeze(car)
            // car.model = "Y" 
            // car.color = "Black"
            // console.log(car)

            //  const nums = [1, 2, 3, 4, 5];
//    - Given an array of numbers, use `map`, `filter`, and `reduce` in a chain to:  
//      - Multiply each number by 2.  
//      - Keep only numbers >= 6.  
//      - Return the sum of the resulting numbers. 

// const result = nums.map((i)=>i*2).filter((i)=>i>=6).reduce((acc,curr)=>acc+curr)
// console.log(result)

// const arr = ["Alice", "Bob", "Charlie"]

// const result = arr.reduce((acc,curr,indx)=>{acc[indx]=curr
//     return acc},{})
// console.log(result)

    const arr = [1, 2, 2, 3, 4, 4, 5];
    console.log(arr.length)
    // const result = []

    // function removeDuplicated(arr){
    //     for(let i =0;i<arr.length;i++){
    //         if(result.includes(arr[i])){
    //             result.push(arr[i])

    //         }
    //     }
    // }

    // console.log(removeDuplicated([1, 2, 2, 3, 4, 4, 5]))

