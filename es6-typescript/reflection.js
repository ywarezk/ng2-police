// proxy

// proxy used to create traps for base system operations

const myObj = new Proxy({}, {
    set: (target, p, value, reciever) => {
        console.log('this will run when setting property');
        if (typeof value !== 'number') {
            throw new TypeError('you have to put number');
        }
        Reflect.set(target, p, value + 10, reciever)
    }
})

myObj['hello'] = 10;
console.log(myObj['hello']);

myObj['foo'] = 'bar';

