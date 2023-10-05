const connection = require("../connector");

exports.getOrders = (req, res, next) => {
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
      return res.status(200).json(result);
    }
  );
};
