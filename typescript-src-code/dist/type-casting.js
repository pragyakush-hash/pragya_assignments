// type casting
// assertion
// addOrConcat(2,3,"add") -->5
function addOrCount(a, b, c) {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
}
const value = addOrCount(2, 2, "concat");
const value2 = addOrCount(2, 3, "add");
console.log(value);
console.log(value2);
export {};
