import 'zone.js'


console.log(Zone.current.name);

const currentZone: Zone = Zone.current;

const angularZone: Zone = currentZone.fork({
    name: 'angular',
    onHasTask: (parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, hasTaskState: HasTaskState) => {
        if (!hasTaskState.microTask && !hasTaskState.macroTask && !hasTaskState.eventTask) {
            console.log('I should run CD now');
        }
    }
});

console.log(angularZone.name);

angularZone.run(() => {
    console.log('what zone am i?');
    console.log(Zone.current.name);

    setTimeout(() => {
        console.log('what zone am i in timer?');
        console.log(Zone.current.name);
    }, 2000);

})