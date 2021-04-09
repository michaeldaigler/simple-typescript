import * as React from "react"

declare module 'react' {
    interface Component {
        helloWorld(): string;
    }
}

React.Component.prototype.helloWorld = function () {
    return "Hello World"
}

class MyComponent extends React.Component {
    render() {
        return <div>{this.helloWorld()}</div>
    }
}

////////////////

interface Cart {
    calculateTotal(): number;
}
/////////////


interface Cart {
    x: number;
}

interface Cart {
    calculateTotal(options: {discountCode: number}): number;
}

let myCart: Cart = {
    x: 1,
    calculateTotal(options?: { discountCode: number }) {
        if (options && options.discountCode) {
            //ssomething
        }
        return 1;
    }
}


/////////////
namespace MyNameSpace {
    export const x: number = 10;
    export interface SomeInterfacae {
        y: number;
    }
}
///////////////

namespace MyNameSpace {
    export const getX = () => x;
    export interface SomeInterfacae {
        x: number;
    }
}

MyNameSpace.x;
MyNameSpace.getX();

const someInterface: MyNameSpace.SomeInterfacae = {
    x: 1,
    y: 2,
}

////////

function someFunction() {
    return 10;
}

namespace someFunction {
    export const someProperty = 10;
}

someFunction.someProperty;

////////


enum Vegetables {
    Tomato = 'tomato',
    Onion = 'onion',
}


namespace Vegetables {
    export function makeSalad() {
        return Vegetables.Tomato + Vegetables.Onion;
    }
}

const sald = Vegetables.makeSalad();


///////////


class Salad { }

namespace Salad {
    export const availableDressings = ['olive oil', 'yoghurt'];


}

Salad.availableDressings.includes('olive oil')

