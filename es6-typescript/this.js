"use strict"
// this

function printThis() {
    console.log(this);
}

printThis(); // window/global or undefined

const a = {'hello': 'world', 'foo': printThis};

a.foo(); // a 

class Person {
    constructor() {
        this.age = 0;

    }

    birthday() {
        // var self = this;
        // setTimeout(function() {
        //     self.age++;    
        // }, 0);

        // setTimeout((function() {
        //     this.age++;    
        // }).bind(this), 0);

        // setTimeout(() => {
        //     this.age++;    
        // }, 0);
    }
}

// function Person() {}
// Person.prototype.birthday = function() {}

const person = new Person();
person.birthday();
setTimeout(function() {
    console.log(person.age);
}, 1000); 
