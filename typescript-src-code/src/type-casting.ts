// type casting
// assertion

// addOrConcat(2,3,"add") -->5

function addOrCount(
  a: number,
  b: number,
  c: "add" | "concat"
): number | string {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
}

const value: string = addOrCount(2, 2, "concat") as string;

const value2: number = addOrCount(2, 3, "add") as number;

console.log(value);
console.log(value2);
