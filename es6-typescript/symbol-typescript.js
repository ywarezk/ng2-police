"use strict";
// symbol
var Person = /** @class */ (function () {
    function Person(_name) {
        this._name = _name;
    }
    return Person;
}());
var person = new Person('Yariv');
person._name = 'Katz';
console.log(person._name);
for (var key in person) {
    console.log(key);
}
console.log(Object.keys(person));
