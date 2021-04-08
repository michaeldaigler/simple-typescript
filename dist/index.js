"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name_1, _name_2;
Object.defineProperty(exports, "__esModule", { value: true });
const multiply_1 = __importStar(require("./multiply"));
// import * as mulitplyModule from "./multiply"
const a = 5;
const d = 2;
console.log(`${a} * ${d} = ${multiply_1.default(a, d)}`);
multiply_1.multiplyByTwo(2);
/** ------------------------------- */
//String
let c = true;
//Number
let num = 1 + 0b1 + 0o1 + 0x1;
//String
const hello = "Hello";
const world = "World";
const helloWorld = `
  ${2 + 2}
  ${world}
`;
// NUll and undefined
let n = null;
let u = undefined;
let someNumber = null;
function uppercaseFirstletter(str) {
    //type guard
    if (str) {
        return str[0].toUpperCase() + str.substr(1);
    }
}
console.log(uppercaseFirstletter("hello"));
const myObj = new Map();
// Void
function log(message) {
    console.log(message);
}
// Array
let arr1 = ['x', 'y'];
let arr2 = arr1;
// Tuple
let tuple = ['str', 1];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 99] = "Blue";
})(Color || (Color = {}));
let myFavColor = Color.Blue;
console.log(Color.Red, Color.Green, Color.Blue);
console.log(Color[99]);
//Any
let ANY;
ANY = 'a string';
ANY = 1;
ANY = true;
//Type Assertions
// const email = document.getElementById('email');
// if (email) {
//     email.addEventListener('change', e => {
//         const input = e.currentTarget as HTMLInputElement;
//         console.log(input.value)
//     })
// }
// FUnctions (optional and default parameters)
function sum(a, b = 0) {
    return a + (b);
}
sum(1);
const sum2 = (a, b) => a + b;
function sumeEveryThing(arg1, arg2, ...numbers) {
    return numbers.reduce((result, num) => result + num, 0);
}
function calcArea(...args) {
    if (args.length == 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);
}
// Classes
class Robot {
    // desrcibing properties in constructor allows typescript to implicitly assign the arguments as properties of the class e.g. 'protected _name: string'
    constructor(_name, color) {
        this._name = _name;
        this._color = color;
    }
    static isColorAvailable(color) {
        return Robot.availableColors.includes(color);
    }
    askName() {
        console.log(`My name is ${this.name}`);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
    }
    set color(color) {
        if (!Robot.isColorAvailable(color)) {
            throw new Error(`Color ${color} is not available!`);
        }
        this._color = color;
    }
    set name(value) {
        this._name = "PREFIX_" + value;
    }
    get name() {
        return this._name + "_SUFFIX";
    }
}
Robot.availableColors = ['green', 'yellow'];
class FlyingRobot extends Robot {
    constructor(name, jPackSize) {
        super(name);
        this.jetpckSize = jPackSize;
    }
    move(distance) {
        console.log(`${this.name} is flying`);
        super.move(distance);
    }
}
const robot = new Robot('John');
robot.askName();
const flyingRobot = new FlyingRobot('Jim', 2);
flyingRobot.move(10);
flyingRobot.name = "Mike";
console.log(flyingRobot.name);
// PRivate fields
// a private field is unique  and exists only in the scope of the containing class, cannot be ovveridden or read fromn subclasses
class PrivateRobot {
    constructor(name) {
        _name_1.set(this, void 0);
        __classPrivateFieldSet(this, _name_1, `Private-${name}`);
    }
    getName() {
        return __classPrivateFieldGet(this, _name_1);
    }
}
_name_1 = new WeakMap();
class AdvancedRobot extends PrivateRobot {
    constructor(name) {
        super(name);
        _name_2.set(this, void 0);
        __classPrivateFieldSet(this, _name_2, `Advanced-${name}`);
    }
    getName() {
        return __classPrivateFieldGet(this, _name_2);
    }
}
_name_2 = new WeakMap();
const r1 = new AdvancedRobot("Michael");
const r2 = new PrivateRobot("Bob");
console.log(`${r1.getName()}  |  ${r2.getName()}`);
