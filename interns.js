const { initDB } = require("./db");

initDB(function(err, db) {
  if (err) {
    throw err;
  }
  db.db("ismailah28").createCollection("interns", function(err, result) {
    if (err) throw err;
    console.log("interns collection created");
  });
});
