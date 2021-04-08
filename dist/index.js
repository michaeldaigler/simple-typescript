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
const email = document.getElementById('email');
if (email) {
    email.addEventListener('change', e => {
        const input = e.currentTarget;
        console.log(input.value);
    });
}
