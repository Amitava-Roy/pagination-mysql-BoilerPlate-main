var mysql = require("mysql2");

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "a",
//     database: "test",
//     multipleStatements: true
// });

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "orders",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err)
    return console.log(
      "failed to connect to mysql server/ database",
      err
    );
  else {
    return console.log(
      "connection establish with Datebase!!!!"
    );
  }
});

module.exports = con;
