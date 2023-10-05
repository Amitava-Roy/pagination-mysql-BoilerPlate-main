var mysql = require("mysql2");

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "a",
//     database: "test",
//     multipleStatements: true
// });
//localhost

let con = mysql.createConnection({
  host: "byvpip1dwddtyexoldxi-mysql.services.clever-cloud.com",
  user: "ud4hhfl9wyyjujwg",
  password: "C99FowB7zivVSKlmCY0r",
  database: "byvpip1dwddtyexoldxi",
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
