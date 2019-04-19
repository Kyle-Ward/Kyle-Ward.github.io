// Object spread operator (...)
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40
};
const { tiger, lion, ...rest } = animals;

// Finally():
//a function that can be called at the end of a promise that will run no matter what else happens before it.
const urls = [
  "https://swapi.co/api/people/1",
  "https://swapi.co/api/people/2",
  "https://swapi.co/api/people/3",
  "https://swapi.co/api/people/4"
];

Promise.all(urls.map(url => fetch(url).then(people => people.json())))
  .then(array => {
    console.log("1", array[0]);
    console.log("2", array[1]);
    console.log("3", array[2]);
    console.log("4", array[3]);
  })
  .catch(err => console.log("ughhhh fix it!", err))
  .finally(() => console.log("extra"));

// for await of
// allows for looping through async await promises
// example:

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

// original from async await file:
const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
      })
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("oops", err);
  }
};

//using for await of to do the same thing as above:
const getData2 = async function() {
  try {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
      const data = await request.json();
      console.log(data);
    }
  } catch (err) {
    console.log("oops");
  }
}
