// symbol

class Person {
    constructor(private _name: string) {}
}

const person: Person = new Person('Yariv');
(person as any)._name = 'Katz';

console.log((person as any)._name);

for (const key in person) {
    console.log(key);
}

console.log(Object.keys(person));