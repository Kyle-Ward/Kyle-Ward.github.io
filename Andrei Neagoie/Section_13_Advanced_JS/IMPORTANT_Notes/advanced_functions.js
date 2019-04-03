// Old way
function first() {
    var greet = 'Hi';
    function second() {
        alert(greet);
    }
    return second;
}

var newFunc = first();
newFunc();


// New way
const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closures (above) - a function runs. The function executes. It's never going to be run again. BUT it will remember that, within it's scopre, there are references to it's variables. So the child scope will always have access to the parent scope. (However, parent scopes do not have access to the children).

// Currying - converting a function that takes multiple arguments into a function that takes them one at a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// to call:
curriedMultiply(3)(4); // 12
// why? because now you can do things like this:
const multiplyBy5 = curriedMultiply(5);
// to call:
multiplyBy5(10); // 50

// Compose - putting two functions together to form a third function where the output of one is the input of the other.
// example:
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5)
// compose(sum, sum) runs the function with params (f, g)
// that function returns another function that takes param (a)
// params (f, g) are (sum, sum); param (a) is 5;
// in the last function of const compose, (a) returns 5
// function(g) takes the return of (a) and adds 1
// function(f) takes the return of function(g) and adds 1
// compose returns 7;



// Side effects - things that happen in a function that have an affect outside of it's scope. It is good practice to AVOID this.

// Functional purity - we always want to avoid side affects and always want to return something. This creates DETERMINISTIC code.

// Deterministic code - whatever the input of a function, if the input is the same the return value should be the same.

//What are the two elements of a pure function?
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.