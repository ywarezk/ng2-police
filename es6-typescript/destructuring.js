"use strict";
// destructuring
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var numbersAndStrings = ["hello", 10, "wat", 50, "foo", "bar"];
var stamVar = 10; // [];
// break the array or clone the array
var a = numbersAndStrings[0], restElements = numbersAndStrings.slice(1); // a variable contains "hello", restElements contains array from 1 to 6
// const a = numberAndStrings[0]
// const restElements = [numbersAndStrings[1], numbersAndStrings[2] ...]
var b = numbersAndStrings[0]; // const b = numberAndStrings[0]
console.log(b);
var cloneMyArray = numbersAndStrings.slice(0); // cloned our array
var cloneMyArray2 = numbersAndStrings.slice(); // cloned our array
console.log(cloneMyArray !== numbersAndStrings);
var replace1 = 'hello';
var replace2 = 'world';
_a = [replace2, replace1], replace1 = _a[0], replace2 = _a[1];
function infiniteStringConcat(string1) {
    var stringArray = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        stringArray[_i - 1] = arguments[_i];
    }
}
var myObj = { 'hello': 'world', 'foo': 'bar' };
var cloneDict = __assign({}, myObj);
var cloneDict2 = __rest(myObj, []);
var foo = myObj.foo, myObj2 = __rest(myObj, ["foo"]);
var _a;
