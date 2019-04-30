const app = require("http").createServer((req, res) =>
  res.sendDate("Oh, hi there!")
);

// app.listen(3002, () => {
//   console.log("Server is listening on port 3002");
// });

// We do not want to hardcode the port we are listening to when deploying an app. We need something dynamic so that it can change when needed.

// This is done with the concept of environmental variables.

// node.js has a process.env method which returns all the information about the environment of the server. Using process.env method we can set our own variables, specifically for the port.

// Environmental variables are very important for things that need to be dynamic, such as port, or secret, such as api keys and db passwords.

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
