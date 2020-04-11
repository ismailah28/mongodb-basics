const { initDB } = require("./db");

const findMovies = async (db, callback) => {
  let results = {};
  const collection = db.collection("myMovies");

  // get first movie in collection
  const a = await collection
    .findOne({})
    .then((res) => {
      return res;
    })
    .catch((err) => {
      callback(err);
    });
  results["a"] = a;

  // get movies with rating of 7
  const b = await collection
    .find({ rating: 7 })
    .toArray()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      callback(err);
    });

  results["b"] = b;

  // get all movie title in collection
  const c = await collection
    .find({}, { projection: { _id: 0, movie: 1 } })
    .toArray()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      callback(err);
    });

  // send all three result back to callback
  callback(null, a, b, c);
};

// initialize db and run findMovies function
initDB((err, db) => {
  if (err) throw err;

  const dbo = db.db("ismailah28");

  findMovies(dbo, (err, a, b, c) => {
    if (err) throw err;

    // display results
    console.log("First movie in collection:\n", a);
    console.log("\nMovies with a rating of 7:\n", b);
    console.log("\nAll movie title in collection\n", c);
  });
});
