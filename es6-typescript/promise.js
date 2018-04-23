"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var timerPromise = new Promise(function (resolve, reject) {
    console.log('is promise running if there are no listeners?');
    setTimeout(function () {
        resolve('Hello from promise');
        // reject(new Error('an error has accoured'));
    }, 1000);
});
// promise is not lazy
// observables are lazy
// promise can emit one value or one reject
// observables represent a stream of data and can emit multiple values
// promise - async function will run once for many listeners
// observable - will run for each listener
// promise are not cancelable
// observable are cancelable
// timerPromise.then(..).then()
timerPromise.then(function (message) {
    console.log(message);
}, function (err) {
    // this will run when promise calls reject 
});
timerPromise.then(function (message) {
    console.log(message);
}, function (err) {
    // this will run when promise calls reject 
});
// promise chaining
var promise2 = timerPromise.then(function (message) {
    return message.length;
});
// fetch('https://nztodo.herokuapp.com/api/task/?format=json').then((response) => {
// });
// this function will return promise
// Promise<number>
function waitForTimer() {
    return __awaiter(this, void 0, void 0, function () {
        var message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('enter async');
                    return [4 /*yield*/, timerPromise];
                case 1:
                    message = _a.sent();
                    console.log('promise fulfiled');
                    return [2 /*return*/, message.length];
            }
        });
    });
}
console.log('before calling wait for timer');
waitForTimer().then(function (lengthMsg) {
    console.log("finished waitForTimer " + lengthMsg);
});
