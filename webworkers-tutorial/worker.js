

console.log('worker is running');


console.log('worker is running');


onmessage = function(e) {
    console.log(e.data.message);

}

postMessage({response: 'response from worker'});