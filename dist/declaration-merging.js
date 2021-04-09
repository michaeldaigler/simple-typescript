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
const React = __importStar(require("react"));
React.Component.prototype.helloWorld = function () {
    return "Hello World";
};
class MyComponent extends React.Component {
    render() {
        return React.createElement("div", null, this.helloWorld());
    }
}
let myCart = {
    x: 1,
    calculateTotal(options) {
        if (options && options.discountCode) {
            //ssomething
        }
        return 1;
    }
};
/////////////
var MyNameSpace;
(function (MyNameSpace) {
    MyNameSpace.x = 10;
})(MyNameSpace || (MyNameSpace = {}));
///////////////
(function (MyNameSpace) {
    MyNameSpace.getX = () => MyNameSpace.x;
})(MyNameSpace || (MyNameSpace = {}));
MyNameSpace.x;
MyNameSpace.getX();
const someInterface = {
    x: 1,
    y: 2,
};
////////
function someFunction() {
    return 10;
}
(function (someFunction) {
    someFunction.someProperty = 10;
})(someFunction || (someFunction = {}));
someFunction.someProperty;
////////
var Vegetables;
(function (Vegetables) {
    Vegetables["Tomato"] = "tomato";
    Vegetables["Onion"] = "onion";
})(Vegetables || (Vegetables = {}));
(function (Vegetables) {
    function makeSalad() {
        return Vegetables.Tomato + Vegetables.Onion;
    }
    Vegetables.makeSalad = makeSalad;
})(Vegetables || (Vegetables = {}));
const sald = Vegetables.makeSalad();
///////////
class Salad {
}
(function (Salad) {
    Salad.availableDressings = ['olive oil', 'yoghurt'];
})(Salad || (Salad = {}));
Salad.availableDressings.includes('olive oil');
