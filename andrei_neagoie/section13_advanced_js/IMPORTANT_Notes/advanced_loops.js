const basket = ['apples', 'oranges', 'grapes'];

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

// In JS you can iterate over arrays and strings
// Arrays and strings are ITERABLE

// for of loops - iterates over each item in basket and logs each to the console
for (item of basket) {
    console.log(item); // returns apples, oranges, grapes
}

// for in loops - enumerates - *works with objects, but does not iterate* - returns each property from an object
for (item in detailedBasket) {
    console.log(item); // returns apples, oranges, grapes
}

// Rather than iterating over an object, we are enumerating over an objects properties. Object are not iterable, but they are enumerable. 