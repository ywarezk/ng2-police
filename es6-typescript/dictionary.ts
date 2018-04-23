

const myHello: {[a: string]: string} = {
    [Math.random()]: 'wat'
};
myHello['hello'] = 'hello world';
// myHello['foo'] = 10; //error
myHello['foo'] = '10'; 

console.log(Object.keys(myHello));

delete myHello['foo'];