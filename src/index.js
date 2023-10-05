const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const cors = require("cors");
const connection = require("./connector");
const orderRoute = require("./routes/orders");

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//for browser cross origin policy
app.use(cors());

//api end point for incoming get request
app.use("/api", orderRoute);

//create server in local machine
app.listen(port, () =>
  console.log(`App listening on port ${port}!`)
);

module.exports = app;
