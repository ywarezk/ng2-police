// destructuring

const numbersAndStrings: Array<string | number> = ["hello", 10, "wat", 50, "foo", "bar"];

const stamVar: number | string | boolean = 10 // [];

// break the array or clone the array

const [a, ...restElements] = numbersAndStrings; // a variable contains "hello", restElements contains array from 1 to 6
// const a = numberAndStrings[0]
// const restElements = [numbersAndStrings[1], numbersAndStrings[2] ...]

const [b] = numbersAndStrings; // const b = numberAndStrings[0]
console.log(b);

const [...cloneMyArray] = numbersAndStrings // cloned our array
const cloneMyArray2 = [...numbersAndStrings] // cloned our array
console.log(cloneMyArray !== numbersAndStrings); 

let replace1 = 'hello';
let replace2 = 'world';

[replace1, replace2] = [replace2, replace1];

function infiniteStringConcat(string1: string, ...stringArray: string[]) {

}

const myObj = {'hello': 'world', 'foo': 'bar'};

const cloneDict = {...myObj};
const {...cloneDict2} = myObj;
const {foo, ...myObj2} = myObj
