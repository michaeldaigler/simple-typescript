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
    Red = 2,
    Green = 5,
    Blue = 99,
}
let myFavColor: Color = Color.Blue;
console.log(Color.Red, Color.Green, Color.Blue);
console.log(Color[99])

//Any
let ANY: any;
ANY = 'a string';
ANY = 1;
ANY = true

//Type Assertions
const email = document.getElementById('email');

if (email) {
    email.addEventListener('change', e => {
        const input = e.currentTarget as HTMLInputElement;
        console.log(input.value)
    })
}

// FUnctions (optional and default parameters)

function sum(a: number, b: number = 0): number {
    return a + (b);
}
sum(1);

type MYFunc = (a: number, b: number) => number;
const sum2: MYFunc = (a, b) => a + b;

function sumeEveryThing(arg1: string, arg2: boolean, ...numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0)
}

//Overloads

function calcArea(width: number, height: number): number;
function calcArea(length: number): number;

function calcArea(...args: number[]): number {
    if (args.length == 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);

}