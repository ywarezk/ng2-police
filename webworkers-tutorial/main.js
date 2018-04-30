


// while(true) {

// }

const myHelloWorker = new Worker('worker.js');

myHelloWorker.postMessage({message: 'hello from main thred'});

myHelloWorker.onmessage = function(e) {
    console.log(e.response);
}