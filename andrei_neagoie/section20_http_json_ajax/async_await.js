// Async Await is part of ES8 and built on top of promises. It makes things easier to read.

// normal promise:
movePlayer(100, "Left")
  .then(() => movePlayer(400, "Left"))
  .then(() => movePlayer(10, "Right"))
  .then(() => movePlayer(330, "Left"));

// Async Await promise:
async function playerStart() {
  const firstMove = await movePlayer(100, "Left"); //pause
  await movePlayer(400, "Left"); //pause
  await movePlayer(10, "Right"); //pause
  await movePlayer(330, "Left"); //pause
}

// Both sets of code above do the same thing. The goal with Async Await is to make code that is asynchronous look synchronous. Async Await code are still promises under the hood. By declaring an async function we gain access to the await keyword inside of it. Await tells the function to pause until it has some info for it before moving on. Variables can be assigned to await statements to hold the return values.

// Example1:
// Both log the same object data to the console.

// fetch as a promise:
fetch("hhtps://jsonplaceholder.typicode.com/users")
  .then(resp => resp.json())
  .then(console.log);

//fetch using async await:
async function fetchUsers() {
  const resp = await fetch("hhtps://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}

// Example2:

// using promises:
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
  .then(array => {
    console.log("users", array[0]);
    console.log("posts", array[1]);
    console.log("albums", array[2]);
  })
  .catch("oops");

// using async await:
const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(url => fetch(url).then(resp => resp.json()))
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch(err) {
    console.log("oops", err);
  }
};

// with asyn await, to catch errors we must wrap the function in try{} and then have catch(err) after the try{} brackets.
