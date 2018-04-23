// symbol

/// how do make private properties

class Person {
    constructor(name) {
        this._name = name;

        Object.defineProperty(this, '_name2', {
            enumerable: false,
            value: name
        });

        Object.defineProperty(this, 'namesymbol', {
            enumerable: false,
            value: Symbol(),
            writable: false
        });

        this[this.namesymbol] = name;
    }
}

const person = new Person('yariv');

for (const key in person) {
    console.log(key);
}

console.log(Object.keys(person));

console.log(person._name2);
person._name2 = 'katz';

// Symbol

const symbol1 = Symbol();
const symbol2 = Symbol('stam helping');