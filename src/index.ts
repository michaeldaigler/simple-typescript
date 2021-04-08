import mulitply, { multiplyByTwo as mBy2, HelloWorld } from "./multiply";
import {ShoppingCart} from './lib/shopping-cart'
import { calculateTotalAmount } from "./lib/calculate-total-amount";
import { Order } from "./lib/order";
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
// const email = document.getElementById('email');

// if (email) {
//     email.addEventListener('change', e => {
//         const input = e.currentTarget as HTMLInputElement;
//         console.log(input.value)
//     })
// }

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


// Classes
class Robot {
    _color: string;
    static availableColors = ['green', 'yellow'];
    static isColorAvailable(color: string) {
        return Robot.availableColors.includes(color)
    }
    // desrcibing properties in constructor allows typescript to implicitly assign the arguments as properties of the class e.g. 'protected _name: string'
    constructor(protected _name: string, color: string) {
        this._color = color
    }

    askName() {
        console.log( `My name is ${this.name}`)
    }
    move(distance: number) {
        console.log(`${this.name} moved ${distance} meters`);
    }

    set color(color: string) {
        if (!Robot.isColorAvailable(color)) {
            throw new Error(`Color ${color} is not available!`)
        }
        this._color = color;
    }

    set name(value: string) {
        this._name = "PREFIX_" + value;
    }
    get name() {
        return this._name + "_SUFFIX";
    }
}

class FlyingRobot extends Robot {
    private readonly jetpckSize: number;
    constructor(name: string, jPackSize: number) {
        super(name);
        this.jetpckSize = jPackSize;
    }
    move(distance: number) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}

const robot = new Robot('John');
robot.askName()

const flyingRobot = new FlyingRobot('Jim', 2);
flyingRobot.move(10);
flyingRobot.name = "Mike"
console.log(flyingRobot.name)

// PRivate fields
// a private field is unique  and exists only in the scope of the containing class, cannot be ovveridden or read fromn subclasses
class PrivateRobot {
    #name: string;
    constructor(name: string) {
        this.#name = `Private-${name}`;
    }
    getName() {
        return this.#name;
    }
}

class AdvancedRobot extends PrivateRobot {
    #name: string;
    constructor(name: string) {
        super(name);
        this.#name = `Advanced-${name}`;
    }
    getName() {
        return this.#name;
    }
}
const r1 = new AdvancedRobot("Michael");
const r2 = new PrivateRobot("Bob")

console.log(`${r1.getName()}  |  ${r2.getName()}`)


const cart = new ShoppingCart();
console.log(`The cart's total is ${calculateTotalAmount(cart)}`)

const order = new Order();
console.log(`The order's total is ${calculateTotalAmount(order)}`)



