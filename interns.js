const { initDB } = require("./db");

const movies = [
  { movie: "The Banker", year: "2020", rating: 8 },
  { movie: "Bad Boys", year: "2020", rating: 7 },
  { movie: "The Hunt", year: "2020", rating: 7 },
  { movie: "Bloodshot", year: "2020", rating: 7.5 },
  { movie: "First Cow", year: "2020", rating: 6.5 },
];

// initilize db and populate myMovies collection
initDB(function (err, db) {
  if (err) {
    throw err;
  }
  let dbo = db.db("ismailah28");

  // insert movies into movies collection
  dbo.collection("myMovies").insertMany(movies, function (err, res) {
    if (err) throw err;
    console.log(`${res.insertedCount} movies inserted.`);
    console.log(res);
    db.close();
  });
});
