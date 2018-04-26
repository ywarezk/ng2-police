
declare var Rx: any;


Rx.Observable
    .fromEvent(document.getElementById('search'), 'input')
    .map((event: any) => {
        console.log('map');
        return event.target.value;
    })
    .debounceTime(1000)
    .distinctUntilChanged()
    .mergeMap((searchString: string) => {
        debugger;
        return Rx.DOM.ajax(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchString}`);
    })
    .subscribe((response: string) => {
        debugger;
        // console.log(`Search string: ${searchString}`);
    })