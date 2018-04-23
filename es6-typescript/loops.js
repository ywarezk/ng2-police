

const myObject = {'hello': 'world'};

for (const key in myObject) {
    console.log(key);
}

Object.prototype.foo = 'bar';

for (const key in myObject) {
    console.log(key);
}

Object.defineProperty(myObject, '_thisIsPrivate', {
    value: 'this is a private member',
    enumerable: false
});

for (const key in myObject) {
    console.log(key);
}

console.log(Object.getOwnPropertyNames(myObject));