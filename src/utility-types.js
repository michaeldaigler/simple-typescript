var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var updateStarship = function (id, starship) {
};
updateStarship(1, {
    name: 'Explorer'
});
var staships = {
    Explorer1: {
        name: 'Explorer1',
        enableHyperJump: true
    },
    Explorer2: {
        name: 'Explorer2',
        enableHyperJump: false
    }
};
var johnssDrink;
johnssDrink = 'Coffee';
var JanseDrink;
JanseDrink = 'Tea';
var JanesDrinks2;
JanesDrinks2 = 'Lemonade';
function paintStarship(id, color) {
    return {
        id: id,
        color: color
    };
}
paintStarship(1, 'blue');
function Deletable(Base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.delte = function () { };
        return class_1;
    }(Base));
}
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    return Car;
}());
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var DeletableCar = Deletable(Car);
var DeletableUser = Deletable(User);
var Profile = /** @class */ (function () {
    function Profile() {
    }
    return Profile;
}());
var profile = new Profile();
profile.user = new DeletableUser('Joe');
profile.car = new DeletableCar('Ferrari');
var myObject = {
    sayHello: function () {
        return this.helloWorld();
    }
};
myObject.sayHello = myObject.sayHello.bind({
    helloWorld: function () {
        return 'Hello World!';
    }
});
console.log(myObject.sayHello());
