import mulitply, { multiplyByTwo as mBy2, HelloWorld } from "./multiply";
// import * as mulitplyModule from "./multiply"
const a = 5;
const d = 2;

console.log(`${a} * ${d} = ${mulitply(a, d)}`);
mBy2(2);

/** ------------------------------- */
//String
let c: boolean = true;
//Number
let num: number = 1 + 0b1 + 0o1 + 0x1;
//String
const hello: string = "Hello";
const world: string = "World";
const helloWorld = `
  ${2 + 2}
  ${world}
`;

// NUll and undefined
let n: null = null;
let u: undefined = undefined;

let someNumber: number | null = null;

function uppercaseFirstletter(str: string | null) {
  //type guard
  if (str) {
    return str[0].toUpperCase() + str.substr(1);
  }
}

console.log(uppercaseFirstletter("hello"));

// Object
type primitiveTypes = boolean | number | string | symbol | null | undefined;
const myObj: object = new Map();

// Void
function log(message: string): void {
  console.log(message);
}

// Array
let arr1: string[] = ['x', 'y'];
let arr2: Array<string> = arr1;

// Tuple
let tuple: [string, number] = ['str', 1];

// Enum
enum Color {
    Red,
    Green,
    Blue
}

//Any
