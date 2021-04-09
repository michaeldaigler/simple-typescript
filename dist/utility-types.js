"use strict";
const updateStarship = (id, starship) => {
};
updateStarship(1, {
    name: 'Explorer',
});
const staships = {
    Explorer1: {
        name: 'Explorer1',
        enableHyperJump: true,
    },
    Explorer2: {
        name: 'Explorer2',
        enableHyperJump: false,
    }
};
let johnssDrink;
johnssDrink = 'Coffee';
let JanseDrink;
JanseDrink = 'Tea';
let JanesDrinks2;
JanesDrinks2 = 'Lemonade';
function paintStarship(id, color) {
    return {
        id,
        color,
    };
}
paintStarship(1, 'blue');
function Deletable(Base) {
    return class extends Base {
        delte() { }
    };
}
class Car {
    constructor(name) {
        this.name = name;
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
}
const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);
class Profile {
}
const profile = new Profile();
profile.user = new DeletableUser('Joe');
profile.car = new DeletableCar('Ferrari');
const myObject = {
    sayHello() {
        return this.helloWorld();
    }
};
myObject.sayHello = myObject.sayHello.bind({
    helloWorld() {
        return 'Hello World!';
    }
});
console.log(myObject.sayHello());
