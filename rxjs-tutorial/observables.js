"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var rxjs_2 = require("rxjs");
// observer has the following methods
// next - jumps on every pulse
// error - data stream emits error
// complete - data stream closes
// observables are lazy
var counterObservable = rxjs_2.Observable.create(function (dataStreamObserver) {
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
// subject
var counterSubject = new rxjs_2.Subject();
counterSubject.next(0);
counterSubject.next(1);
counterSubject.next(2);
counterSubject.subscribe(function (counter) {
    console.log("the subject number is: " + counter);
});
counterSubject.next(3);
var counterBehaviourSubject = new rxjs_1.BehaviorSubject(0);
// counterBehaviourSubject.next(0);
counterBehaviourSubject.next(1);
counterBehaviourSubject.next(2);
counterBehaviourSubject.subscribe(function (counter) {
    console.log("behavior subject: " + counter);
});
counterBehaviourSubject.next(3);
