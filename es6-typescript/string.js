"use strict";
var helloWorld = 'hello world';
var message = "\nthis is line 1\nthis is line 2\n" + (1 + 1) + "\n" + helloWorld + "\n";
//message[3] = 'b';
console.log(message[3]);
for (var _i = 0, message_1 = message; _i < message_1.length; _i++) {
    var char = message_1[_i];
    console.log(char);
}
