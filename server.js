// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();
// Initialize Body Purchaser
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));


// Setup Server
const host = "localhost";
const port = 8000;
let server = app.listen(port, host, listening);
function listening(){
  console.log("server running");
  console.log("running on localhost: ${port}");
}
// GET Request
app.get("/weather", function (req, res){
  projectData = "foo"
  res.send(projectData);
});

// POST Request

app.post("/weather", function(req, res){
  projectData = req.body;
  res.send(projectData);
});