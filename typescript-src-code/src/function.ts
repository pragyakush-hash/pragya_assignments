function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 2));

const add2 = function (a: number, b: number): number {
  return a + b;
};

const add3 = (a: number, b: number): number => a + b;

function greet(name: string): void {
  console.log(`hello4 ${name}`);
}
//void  uses when function return nothing

function greet2(name?: string): void {
  console.log(`hello ${name ?? "guest"}`);
}
greet2();
greet("pragya");

function greet3(name: string = "guest pragay"): void {
  console.log(`hello ${name}`); // using default values
}

greet3("jiya this side");

//never return type //throw some error // infinite loope

function throwError(message: string): never {
  throw new Error(message);
}

//function overloading

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): string | number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + "" + b;
  } else {
    throwError("invalid args");
  }
}

console.log(combine(1, 2));
// console.log(combine("hello", "pragya"));

// function overloading by function count

function greet4(): string;
function greet4(name: string): string;

function greet4(name?: string): string {
  return `hello ${name ?? "guest"}`;
}

console.log(greet4("pragyaaaaaajiya"));
