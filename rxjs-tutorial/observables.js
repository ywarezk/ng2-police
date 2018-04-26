"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
// observer has the following methods
// next - jumps on every pulse
// error - data stream emits error
// complete - data stream closes
// observables are lazy
var counterObservable = rxjs_1.Observable.create(function (dataStreamObserver) {
    console.log('will this run and print this message?');
    var counter = 0;
    var timer = setInterval(function () {
        dataStreamObserver.next(counter);
        counter++;
        if (counter > 4) {
            console.log('closing data stream');
            dataStreamObserver.complete();
        }
    }, 1000);
    return function () {
        console.log('will run when data stream closes');
        clearTimeout(timer);
    };
});
// counterObservable.subscribe(observer)
// observables are cancelable
var counterSubscription = counterObservable.subscribe(function (counter) {
    console.log(counter);
}, function () {
    // this will jump on error
    console.log('error!!!');
}, function () {
    // this will jump on complete
    console.log('complete!!!');
});
// observable are cancelable
// observable stream only exists if there are listeners
setTimeout(function () {
    console.log('unsubscribing');
    counterSubscription.unsubscribe();
}, 2000);
counterObservable.subscribe(function (counter) {
    console.log("second listener: " + counter);
});
// observables duplicates with every listener
