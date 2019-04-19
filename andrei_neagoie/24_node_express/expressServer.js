const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/*EXPRESS AUTOMATICALLY CONVERTS TYPES:*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("getting root");
});

app.get("/profile", (req, res) => {
  res.send("getting profile");
});

app.post("/profile", (req, res) => {
  console.log(req.body);
  res.send("Success");
});


/***********************************************/

/*EXPRESS MIDDLEWARE FUNCTIONS TAKES REQUESTS AND DOES SOMETHING TO THEM BEFORE SENDING GET, POST, PUT, OR DELETE.*/

/*app.use() is the middleware function:*/

// app.use((req, res, next) => {
//   console.log("<hi>Hello!</hi>")
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("test");
// });

app.listen(3000);