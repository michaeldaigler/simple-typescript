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

function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass ) {}
class Car {
    deleted!: boolean;
    delte() {}
    constructor(public name: string) { }

}

class User {
    deleted!: boolean;
    delte() {}
    constructor(public name: string) { }
}

