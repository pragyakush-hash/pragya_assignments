function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
const add2 = function (a, b) {
    return a + b;
};
const add3 = (a, b) => a + b;
function greet(name) {
    console.log(`hello4 ${name}`);
}
//void  uses when function return nothing
function greet2(name) {
    console.log(`hello ${name !== null && name !== void 0 ? name : "guest"}`);
}
greet2();
greet("pragya");
function greet3(name = "guest pragay") {
    console.log(`hello ${name}`); // using default values
}
greet3("jiya this side");
//never return type //throw some error // infinite loope
function throwError(message) {
    throw new Error(message);
}
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + "" + b;
    }
    else {
        throwError("invalid args");
    }
}
console.log(combine(1, 2));
function greet4(name) {
    return `hello ${name !== null && name !== void 0 ? name : "guest"}`;
}
console.log(greet4("pragyaaaaaajiya"));
export {};
