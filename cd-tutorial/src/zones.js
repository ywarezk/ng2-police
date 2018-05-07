"use strict";
exports.__esModule = true;
require("zone.js");
console.log(Zone.current.name);
var currentZone = Zone.current;
var angularZone = currentZone.fork({
    name: 'angular',
    onHasTask: function (parentZoneDelegate, currentZone, targetZone, hasTaskState) {
        if (!hasTaskState.microTask && !hasTaskState.macroTask && !hasTaskState.eventTask) {
            console.log('I should run CD now');
        }
    }
});
console.log(angularZone.name);
angularZone.run(function () {
    console.log('what zone am i?');
    console.log(Zone.current.name);
    setTimeout(function () {
        console.log('what zone am i in timer?');
        console.log(Zone.current.name);
    }, 2000);
});
