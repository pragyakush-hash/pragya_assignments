const inputField = document.getElementById("input")
const addbtn = document.getElementById("addItem");

addbtn.addEventListener("click", (e) => {
    const name = inputField.values



});


// Write a script that:

// Logs “Start”
// Uses setTimeout with 0 ms to log “Timeout”
// Uses a Promise that resolves immediately to log “Promise resolved”
// Fetches https://jsonplaceholder.typicode.com/todos/1 and logs "Data fetched".
// Logs “End” at the end.

// console.log("Start")

// setTimeout(()=>console.log("Timeout"),0)

// const promise = new Promise((reslove)=>{
//     if(reslove){
//         console.log("Promise resolved")
//     }
// })

// const fetchData = async () => {

//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data = await response.json();
//     // console.log("data",data)
//     console.log("Data fetched");//log the json data
//   } catch (error) {
//     console.error("Error", error);
//   }
// }
// fetchData()
// setTimeout(()=>console.log("End"),1000)
