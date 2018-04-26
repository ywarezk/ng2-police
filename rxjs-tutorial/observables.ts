
import {Observer, Subscription} from 'rxjs';
import {Observable} from 'rxjs';

// observer has the following methods
// next - jumps on every pulse
// error - data stream emits error
// complete - data stream closes



// observables are lazy

const counterObservable: Observable<number> = Observable.create((dataStreamObserver: Observer<number>) => {
    console.log('will this run and print this message?');
    let counter = 0;
    let timer = setInterval(() => {
        dataStreamObserver.next(counter);
        counter++;
        
        if (counter > 4) {            
            console.log('closing data stream');
            dataStreamObserver.complete();
        }
    }, 1000);

    return function() {
        console.log('will run when data stream closes');
        clearTimeout(timer);
    }
});

// counterObservable.subscribe(observer)

// observables are cancelable

const counterSubscription: Subscription = counterObservable.subscribe((counter: number) => {
    console.log(counter);
}, () => {
    // this will jump on error
    console.log('error!!!');
}, () => {
    // this will jump on complete
    console.log('complete!!!');
});

// observable are cancelable
// observable stream only exists if there are listeners

setTimeout(() => {
    console.log('unsubscribing');
    counterSubscription.unsubscribe();
}, 2000);

counterObservable.subscribe((counter: number) => {
    console.log(`second listener: ${counter}`);
});

// observables duplicates with every listener

