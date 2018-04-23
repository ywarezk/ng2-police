"use strict";
var myHello = (_a = {},
    _a[Math.random()] = 'wat',
    _a);
myHello['hello'] = 'hello world';
// myHello['foo'] = 10; //error
myHello['foo'] = '10';
console.log(Object.keys(myHello));
delete myHello['foo'];
var _a;
