// 1.  **Counter Update**
//     -   Modify the counter so it increases by **2** when you click the
//         button.\
//     -   Add a new button that **resets the counter back to 0**.

const counter = document.getElementById("count");
const incBtn = document.getElementById("inc");
const resetBtn = document.getElementById("reset");

incBtn.addEventListener("click", () => {
  const { innerText = "" } = counter;
  counter.innerText = +innerText + 2;
});

resetBtn.addEventListener("click", () => {
  counter.innerText = 0;
});

// 2**Timer**
//     -   Extend the timer so that it **decreases** every second instead
//         of increasing.\
//     -   Add a **reset button** that sets timer back to 0.

let id;
const timer = document.getElementById("timer");
const start = document.getElementById("timerStart");
const stop = document.getElementById("timerReset");

const timerFunction = () => {
  if (id) clearInterval(id);
  id = setInterval(() => {
    const { innerText = "" } = timer;
    timer.innerText = +innerText - 1;
  }, 1000);
};
start.addEventListener("click", timerFunction);

stop.addEventListener("click", () => {
  if (id) clearInterval(id);
  start.removeEventListener("click", timerFunction);
  timer.innerText = 0;
});

// 3.  **Event Delegation**
//     -   Add 3 more `<li>` dynamically into the `<ul>` using JavaScript.\
//     -   Confirm that your event delegation code still works for the
//         newly added items.

const ul = document.querySelector("#parent-list");
const addbtn = document.getElementById("addItem");
ul.addEventListener("click", (e) => {
  // const {target : {classList  = []}} = e
  if (e.target.nodeName === "LI") {
    console.log(`clicked li: ${e.target.innerText}`);
  }
});

addbtn.addEventListener("click", (e) => {
  const newItems = ["Item 4", "Item 5", "Item 6"];
  newItems.forEach((itemText) => {
    const newLi = document.createElement("li");
    newLi.textContent = itemText;
    ul.appendChild(newLi);
  });
});

// 4.  **Form preventDefault**
//     -   Update the form so that instead of just logging the value, it
//         **displays the value in the `<p id="form-msg">`**.\
//     -   Clear the input box after submission.

const myForm = document.querySelector("#myForm");
const userNameInput = document.getElementById("username");
const displayMsg = document.getElementById("form-msg");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = userNameInput.value;
  displayMsg.innerHTML = `Hello, ${name}`;
  userNameInput.value = "";
  console.log(`Your typed value is: ${name}`);
});

//5 **Toggle**
//     -   Instead of visibility, change the toggle example so that it uses
//         `.style.display = "none"` and `"block"`.\
//     -   Bonus: Change button text to `"Show"` / `"Hide"` depending on
//         state.

const toggleBtn = document.querySelector("#toggle-btn");
const toggleText = document.querySelector("#toggle-text");
toggleBtn.addEventListener("click", () => {
  if (toggleText.style.display === "none") {
    toggleText.style.display = "block";
    toggleBtn.textContent = "Hide";
  } else {
    toggleText.style.display = "none";
    toggleBtn.textContent = "show";
  }
});

// 6 **Stop Propagation**
//     -   Add another inner box (`inner-inner-box`) inside the red box.\
//     -   Show how multiple levels of propagation behave with/without
//         `stopPropagation()`.

const outerBox = document.querySelector("#outer-box");
const innerBox = document.querySelector("#inner-box");
const innerInnerBox = document.querySelector("#inner-inner-box");
outerBox.addEventListener("click", () => {
  console.log("Clicked outerBox");
});
innerBox.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Clicked innerBox box");
});
innerInnerBox.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Clicked innerInnerBox box");
});

// 7.  **Create & Remove DOM Elements**
//     -   Add a button `"Add Paragraph"` → creates a new `<p>` with text
//         `"Hello World"` inside the page.\
//     -   Add another button `"Remove Paragraph"` → removes the last
//         paragraph created.

const addButton = document.getElementById("addParagraph");
const removeButton = document.getElementById("removeParagraph");
const contentDiv = document.getElementById("content");

addButton.addEventListener("click", () => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Hello Pragya!";

  contentDiv.appendChild(newParagraph);
});

removeButton.addEventListener("click", () => {
  if (contentDiv.lastChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
});

// 8.  **setTimeout vs setInterval**
//     -   Create a box that **changes color every 2 seconds** using
//         `setInterval`.\
//     -   Create another button `"Stop Color Change"` to clear the
//         interval.\
//     -   Add a one-time message `"Hello after 5 sec"` using `setTimeout`.
const colorBox = document.getElementById("colorBox");
const stopButton = document.getElementById("stopBtn");
const msgDisplay = document.getElementById("message");
const colorChangeInterval = setInterval(() => {
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
}, 2000);

stopButton.addEventListener("click", () => {
  clearInterval(colorChangeInterval);
  stopButton.textContent = " Stopped";
});

setTimeout(() => {
  msgDisplay.innerHTML = "Hello after 5 second";
}, 5000);

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 9.  **Dataset Attributes** ///
//     -   Create buttons with `data-color="red"`, `data-color="green"`,
//         `data-color="blue"`.\
//     -   When you click a button, the background color of the page should
//         change according to the `data-color` attribute.

const box = document.getElementById("colorBox");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.getAttribute("data-color");
    box.style.backgroundColor = color;
  });
});

// 10. **Style Manipulation**
//     -   Add a button `"Increase Font Size"` → increases font size of a
//         paragraph by +2px each click.
//     -   Add another `"Decrease Font Size"` button.

let fontSize = 16;
const textElement = document.getElementById("textToResize");
const increaseSize = document.getElementById("increaseFontSize");
const decreaseSize = document.getElementById("decreaseFontSize");

increaseSize.addEventListener("click", () => {
  fontSize += 2;
  textElement.style.fontSize = fontSize + "px";
});

decrease.addEventListener("click", () => {
  fontSize -= 2;
  textElement.style.fontSize = fontSize + "px";
});

//         11. **Input Validation**
// - Add a form with an input for age.
// - When the user submits, check if the value is a number between 1 and 100.
// - Display a message `"Valid age"` or `"Invalid age"` in a `<p>` below the form.

const ageForm = document.getElementById("ageForm");
const ageInput = document.getElementById("ageInput");
const ageValidationMessage = document.getElementById("ageValidationMessage");

ageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const age = parseInt(ageInput.value, 10);

  if (isNaN(age) || age < 1 || age > 100) {
    ageValidationMessage.textContent = "Invalid age";
  } else {
    ageValidationMessage.textContent = "Valid age";
  }
});

// 12. **Change Text Content**
// - Add a paragraph with some text.
// - Create a button `"Change Text"` that changes the paragraph text to something new when clicked.

const changeTextButton = document.getElementById("changeTextButton");
const textContenttext = document.getElementById("textContenttext");

changeTextButton.addEventListener("click", () => {
  textContenttext.textContent = "The text is changed!";
});

// 13. **Add List Item**
// - Create a `<ul>` and a button `"Add Item"`.
// - Each click on the button should add a new `<li>` with text `"Item X"` where X is the next number.

// let itemCount = document.querySelectorAll('#item-list li').length + 1; // Start from next item after the current list items
// const ul = document.getElementById('item-list');
// const addItemList = document.getElementById('add-item-btn');

// addItemList.addEventListener('click', () => {
//     const newItem = document.createElement('li');
//     newItem.textContent = `Item ${itemCount}`;
//     ul.appendChild(newItem);
//     itemCount++;
// });

// 14. **Hide/Show Element**
// - Add a div or paragraph.
// - Create two buttons: `"Hide"` and `"Show"`.
// - Clicking `"Hide"` hides the element, clicking `"Show"` makes it visible again.

const btnHide = document.getElementById("btn-hide");
const btnShow = document.getElementById("btn-show");
const praragraphContent = document.getElementById("paragraph-text");
btnHide.addEventListener("click", () => {
  praragraphContent.style.visibility = "hidden";
});
btnShow.addEventListener("click", () => {
  praragraphContent.style.visibility = "visible";
});

// 15. **Background Color Switcher**
// - Add three buttons: `"Red"`, `"Green"`, `"Blue"`.
// - When clicked, change the background color of the page accordingly.

const boxBackground = document.getElementById("box-one");
const btnRed = document.getElementById("btnRed");
const btnGreen = document.getElementById("btnGreen");
const btnBlue = document.getElementById("btnBlue");

btnRed.addEventListener("click", () => {
  boxBackground.style.backgroundColor = "red";
});
btnBlue.addEventListener("click", () => {
  boxBackground.style.backgroundColor = "blue";
});
btnGreen.addEventListener("click", () => {
  boxBackground.style.backgroundColor = "green";
});
