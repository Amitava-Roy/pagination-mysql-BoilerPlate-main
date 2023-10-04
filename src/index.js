const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const cors = require("cors");
const connection = require("./connector");

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//for browser cross origin policy
app.use(cors());

//api end point for incoming get request
app.get("/api/orders", (req, res, next) => {
  //initiate vairables
  let limit;
  let offset;

  // checking for valid query or setting to default values
  if (
    !req.query.limit ||
    +req.query.limit < 0 ||
    !Number.isInteger(+req.query.limit)
  ) {
    limit = 10;
  } else {
    limit = req.query.limit;
  }

  if (
    !req.query.offset ||
    +req.query.offset < 0 ||
    !Number.isInteger(+req.query.offset)
  ) {
    offset = 0;
  } else {
    offset = req.query.offset;
  }

  //query for fetching data from database
  connection.query(
    `select * from orders limit ${limit} offset ${offset}`,
    (err, result, next) => {
      if (err) {
        //error response if data fetching fails
        return res
          .status(400)
          .json({ message: "404 bad req" });
      }
      //success response
      res.status(200).json(result);
    }
  );
});

//create server in local machine
app.listen(port, () =>
  console.log(`App listening on port ${port}!`)
);

module.exports = app;
