interface Starship {
    name: string;
    enableHyperJump: boolean;
}

type StarshipNameOnly = Pick<Starship, 'name'>

type StarshipNoName = Omit<Starship, 'name'>

const updateStarship = (id: number, starship: Partial<Starship>) => {

}

updateStarship(1, {
    name: 'Explorer',
})

const staships: Record<string, Starship> = {
    Explorer1: {
        name: 'Explorer1',
        enableHyperJump: true,

    },
    Explorer2: {
        name: 'Explorer2',
        enableHyperJump: false,
    }
}

type AvailableDrinks = 'Coffee' | 'Tea' | 'Orange Juice' | 'Lemonade';

let johnssDrink: AvailableDrinks;
johnssDrink = 'Coffee';

type DrinksJaneDoesNotlike = 'Coffee' | 'Orange Juice'
type DrinksJaneLikes = 'Tea' | 'Lemonade' | 'Mohito';
let JanseDrink: Exclude<AvailableDrinks, DrinksJaneDoesNotlike>;
JanseDrink = 'Tea';

let JanesDrinks2: Extract<AvailableDrinks, DrinksJaneLikes>
JanesDrinks2 = 'Lemonade';


interface StarshipProperties {
    color?: 'blue' | 'red' | 'green';
}

function paintStarship(id: number, color: NonNullable<StarshipProperties['color']>) {
    return {
        id,
        color,
    }
}

type PainStarshipReturn = ReturnType<typeof paintStarship>

paintStarship(1, 'blue');


type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
    return class extends Base {
        deleted!: boolean;
        delte() {}
    }
}
class Car {

    constructor(public name: string) { }

}

class User {

    constructor(public name: string) { }
}

const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);

type DeletableUserIntance = InstanceType<typeof DeletableUser>
type DeletablCarInstance = InstanceType<typeof DeletableCar>

class Profile {
    user!: DeletableUserIntance
    car!: DeletablCarInstance

}

const profile = new Profile();
profile.user = new DeletableUser('Joe');
profile.car = new DeletableCar('Ferrari')


interface MyObject {
    sayHello(): void;
}

interface MyObjectThis {
    helloWorld(): string;
}

const myObject: MyObject & ThisType<MyObjectThis> = {
    sayHello() {
        return this.helloWorld();
    }
}

myObject.sayHello = myObject.sayHello.bind({
    helloWorld() {
        return 'Hello World!';
    }
})

console.log(myObject.sayHello())

// --noImplicitThis
type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
  };

  function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    return { ...data, ...methods } as D & M;
  }

  let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
      moveBy(dx: number, dy: number) {
        this.x += dx; // Strongly typed this
        this.y += dy; // Strongly typed this
      },
    },
  });

  obj.x = 10;
  obj.y = 20;
  obj.moveBy(5, 5);