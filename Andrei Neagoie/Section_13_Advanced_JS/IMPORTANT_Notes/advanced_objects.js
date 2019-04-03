// reference type - objects (incl arrays) are reference type, not primitive type (like numbers, strings, booleans, null, undefined, Symbol). Reference types always refer to a specific place in the memory of the computer. When two identical objects are compared it will return false because they point to different areas in the memory, not the same area.
let object1 = { value: 10 };
let object2 = object 1;
let object3 = { value: 10 };

object1 === object2 // returns true

object1 === object3 // returns false

object1.value = 15;
object2.value // returns 15
object3.value = 10;

//context - tells you where you are within the object, not the same as scope. Using this keyword chooses the object environment that it is currently in. It is whatever is to the left of the period. example: window.alert() or console.log()
// example1:
console.log(this); // this references the console
// example2:
function a() {
    console.log(this);
} // calling a() will log the window in the console because a() is defined within the window
// example3:
const object4 = {
    a: function() {
        console.log(this);
    }
} // calling object4.a() will return object4 itself because that is where the function is defined.

//instantiation - making a copy or instance of an object and reusing the code. A class should be thought of as something you want to make a copy of. Every time a Player class is created the constructor function will be run first and will create the properties within it on the Player class. All of the instances of this below are referencing the Player class that is created.
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

// So if the Player chooses to be a wizard (we add on top of whatever the player class has):
class Wizard extends Player {
    constructor(name, type) {
        super(name, type) // anytime we extend something we have to call the constructor function of the original class using the 'super' keyword with the properties that we want to pass to the original constructor(name, type).
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

// This is how classes are used:

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Sean', 'Dark Magic');