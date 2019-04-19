const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/*EXPRESS AUTOMATICALLY CONVERTS TYPES:*/

// app.get("/", (req, res) => {
//   res.send("getting root");
// });

// app.get("/profile", (req, res) => {
//   res.send("getting profile");
// });

// app.post("/profile", (req, res) => {
//   console.log(req.body);
//   res.send("Success");
// });


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

/*****************************************/

//RESTful APIs:

// app.get("/", (req, res) => {
  //GET Restful API
  // req.query //used to show info after ? within the url string
            //example: /?name=kyle&age=33
  // req.body //used to show whatever the requests sends in the body
  // req.headers //used to show info within headers
  // req.params //used to show paramaters of the url

  //can respond with a status:
  // res.status(404).send("not found");
// });

/**********************************************/

// Use middleware to get express to send static files:

// app.use(express.static(__dirname + "/public"))

app.listen(3000);