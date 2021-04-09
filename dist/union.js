"use strict";
function someFB(myArgument) {
    if (typeof myArgument === 'string') {
        let x = myArgument.toUpperCase();
    }
    else if (typeof myArgument === 'number') {
        myArgument.toFixed();
    }
    else {
        myArgument;
    }
}
function isDog(someObject) {
    return someObject.bark !== undefined;
}
function callMyPet(pet) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
class Foo {
}
class Bar {
}
function fooBarFunction(obj) {
    if (obj instanceof Foo) {
        obj.foo;
    }
    else {
        obj.bar;
    }
}
