"use strict";
// Generica Functions
function genericFunction(x) {
    return x;
}
const genericArrowFunction = (x) => x;
// Generic Classes
class GenericClass {
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
const chocCakes = [
    { expireDate: new Date() }
];
const vanillaCakes = [
    { expireDate: new Date() }
];
const getExpiredItems = items => {
    const currentDate = new Date().getTime();
    return items.filter(item => item.expireDate.getDate() < currentDate);
};
const expiredChocCakes = getExpiredItems(chocCakes);
const expiredVanillaCakes = getExpiredItems(vanillaCakes);
const cart2 = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItemById(id) {
        return this.items.find(item => item.id === id);
    }
};
