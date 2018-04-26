"use strict";
Rx.Observable
    .fromEvent(document.getElementById('search'), 'input')
    .map(function (event) {
    console.log('map');
    return event.target.value;
})
    .debounceTime(1000)
    .distinctUntilChanged()
    .mergeMap(function (searchString) {
    debugger;
    return Rx.DOM.ajax("https://nztodo.herokuapp.com/api/task/?format=json&search=" + searchString);
})
    .subscribe(function (response) {
    debugger;
    // console.log(`Search string: ${searchString}`);
});
