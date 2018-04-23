

const timerPromise: Promise<string> = new Promise((resolve, reject) => {
    console.log('is promise running if there are no listeners?');
    setTimeout(() => {
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

timerPromise.then((message: string) => {
    console.log(message);
    
}, (err: Error) => {
   // this will run when promise calls reject 
})

timerPromise.then((message: string) => {
    console.log(message);
}, (err: Error) => {
   // this will run when promise calls reject 
})

// promise chaining

const promise2: Promise<number> =  timerPromise.then((message: string) => {
    return message.length;
})


// fetch('https://nztodo.herokuapp.com/api/task/?format=json').then((response) => {

// });

// this function will return promise
// Promise<number>
async function waitForTimer() {
    console.log('enter async');
    const message = await timerPromise;
    console.log('promise fulfiled');
    return message.length;
    // const [result1, result2, result3 ... ] =[await promise1, await promise2, ...]
}


console.log('before calling wait for timer');
waitForTimer().then((lengthMsg: number) => {
    console.log(`finished waitForTimer ${lengthMsg}`);
});




