// New additions in ES7

// use .includes() on strings and arrays to see if something is included in either.
'Hello'.includes('o') // returns true

const pets = ['cat', 'dog', 'bat'];
pets.includes('dog'); // returns true
pets.includes('bird'); // returns false

// exponential operator
// a function that squares a number:
const square = (x) => x**2; // x to the power of two
square(2); // returns 4
square(5); // returns 25

//a function that cubes a number:
const cube = (y) => y**3;
cube(3); //returns 27
cube(4); //returns 64