// string padding - useful to align characters of strings
'Turtle'.padStart(10); // returns "    Turtle" - 10 total spaces, including the original string
'Turtle'.padEnd(10); // returns "Turtle    " - 10 total spaces, including the original string

// trailing commas in functions, param lists, and calls - typically for longer param lists
const fun = (
            a,
            b,
            c,
            d,) => {
    console.log(a);
}
fun(1,2,3,4,); // logs 1 to the console

// Object.values/.entries replacing Object.keys
// example:
let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr. Grinch'
}
//Object.keys - old way - iterates over object property/value pairs just like indexes in an array.
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]); // returns username0 Santa, username1 Rudolf, username2 Mr. Grinch
})
// Object.values - new way - iterates over each value of each key in an object, but not the key itself
Object.values(obj).forEach(value => {
    console.log(value); // returns Santa, Rudolf, Mr. Grinch
})
// Object.entries - new way - iterates over both keys and values in an object
Object.entries(obj).forEach(value => {
    console.log(value); // returns arrays of ["username0", "Santa"], ["username1", "Rudolf"], ["username2", "Mr. Grinch"]
})
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '') // returns ["Santa0", "Rudolf1", "Mr. Grinch2"]
})