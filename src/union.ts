function someFB(myArgument: number | string | boolean) {
    if (typeof myArgument === 'string') {
        let x = myArgument.toUpperCase();
    } else if (typeof myArgument === 'number'){
        myArgument.toFixed();
    } else {
        myArgument;
    }
}

interface Dog {
    bark(): void;
    walk(): void;
}

interface Cat {
    meow(): void;
    walk(): void;
}

function isDog(someObject: Dog | Cat): someObject is Dog {
    return (<Dog>someObject).bark !== undefined;
}

function callMyPet(pet: Dog | Cat) {
    pet.walk();

    if (isDog(pet)) {
       pet.bark()
    } else {
        pet.meow();
    }
}


class Foo {
    foo!: number;
    commonProp!: string;
}

class Bar {
    bar!: number;
    commmonProp!: string;
}

function fooBarFunction(obj: Foo | Bar) {
    if (obj instanceof Foo) {
        obj.foo
    } else {
        obj.bar
    }
}