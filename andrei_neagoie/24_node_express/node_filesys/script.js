const fs = require("fs"); //"fs" allows us to access the file system

//readFile is async, which is why it uses a callback function
fs.readFile("./hello.txt", (err, data) => {
  if (err) {
    console.log("error");
  } else {
    console.log("Async", data.toString());
  }
});

//readFileSync is synchronous
const file = fs.readFileSync("./hello.txt");
console.log("Sync", file.toString());

//APPEND
// fs.appendFile("./hello.txt", " This is so cool!", err => {
//   if (err) {
//     console.log(err);
//   }
// });

//WRITE
// fs.writeFile("bye.txt", "Sad to see you go", err => {
//   if (err) {
//     console.log(err);
//   }
// })

//DELETE
fs.unlink("./bye.txt", err => {
  if (err) {
    console.log(err);
  }
});