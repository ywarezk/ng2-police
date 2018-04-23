

// iterable

/// i can run on iterables in a for of loop
/// array, string, map

// iterator

/// protocol/interface to create a set of values can also create infinite values
/// myIterator: Iterator = {next: }

// this function will return an iterator
function * myCounter() {
    console.log('starting to run myCounter');
    yield 1; 
    console.log('return 1');
    yield 2; 
    console.log('return 2');
    yield 3; 
    console.log('return 3');
}

const myCounterIterator = myCounter();
console.log(myCounterIterator.next().value);
console.log(myCounterIterator.next().value);
console.log(myCounterIterator.next().value);
console.log(myCounterIterator.next().value);


const myStringDictionary = {
    'hello': 'world', // 3
    'foo': 'bar',  // 1
    'tofu': 'soya milk', // 2,
    [Symbol.iterator]: function * () {
        yield this['foo'];
        yield this['tofu'];
        yield this['hello']
    }
}

for (const item of myStringDictionary) {
    console.log(item);
}


