const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = process.env.PORT || 3002;

const findPrimeRouter = require("../routes/primeRoute");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes are below
app.use(findPrimeRouter);

let server = app.listen(port, function() {
  console.log("Runnning on " + port);
});

module.exports = server;