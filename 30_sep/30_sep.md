.  Predict the output of the following code **before running it**:

``` js
console.log('1');

setTimeout(() => console.log('timeout 1'), 0);

Promise.resolve().then(() => console.log('promise 1'));

console.log('2');

setTimeout(() => console.log('timeout 2'), 0);

Promise.resolve().then(() => console.log('promise 2'));

console.log('3');


output:-
1
2
3
promise 1
promise 2
timeout 1
timeout 2




```

-   Question: Why do promises run before `setTimeout`?

Beacuse Promises have higher priority than setTimeout or we can say that microtask have higher priority than macrotask.

2.  Analyze this code and explain the exact order of execution:

``` js
async function test() {
  console.log('A');
  await Promise.resolve();
  console.log('B');
}
test();
console.log('C');


output:-
A
C
B


 Question: What happens inside the **microtask queue** when `await`
    is used?
ans:- When we used await in microtask the function execution is paused and puts rest of the function into the microtask queue 
and after the current synchronous task are done they run the micro queued tasked.



1.  Run this code and measure the delay:


console.time('timer');
setTimeout(() => {
  console.timeEnd('timer');
}, 2000);

for (let i = 0; i < 1e9; i++) {} // heavy loop

-   Question: Why does the `setTimeout` callback run **later than 2s**?


SetTimeout callback run later than 2 second beacuse of heavy loop excution , setTimeout wait for when loop excution is finished then they run setTimeout, because
setTimeout is not give us guarante to run exactly after the delay it is the minimum delay that we give to them and actual execution depends on when the javaScript engine is free or empty.




## 📌 Part 3: Callbacks vs Promises vs Async/Await

1.  Write the same logic in 3 different ways:
    -   Using `setTimeout(callback)`
    -   Using `Promise.then`
    -   Using `async/await`

Logic: Wait for 2 seconds, then print `"Done!"`.

//  Using `setTimeout(callback)`
const msg = ()=>{
    console.log("Done!")
}
setTimeout(msg, 2000)
    msg()

//  Using `Promise.then`

const delay = (ms)=>{
  return new Promise(resolve=>setTimeout(resolve,ms))
}
delay(2000).then(()=>{
  console.log("Done!")
})

// Using async / await
const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const delayFunction = async () => {
  await delay(2000); 
  console.log("Done!");
}

delayFunction(); 

  ## 📌 Part 5: Debugging

Given this snippet, fix it so that it prints in the correct order:\
Expected: `1 → 2 → 3 → 4`

js
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

console.log(4);

//output 
console.log(1);

setTimeout(() => console.log(4), 0);

Promise.resolve().then(() => console.log(3));

console.log(2);


