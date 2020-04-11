const { initDB } = require("./db");

const updateMovie = async (db, callback) => {
  const collection = db.collection("myMovies");

  const item = await collection
    .findOneAndUpdate(
      { movie: "The Banker" },
      { $set: { movie: "21 Bridges", year: 2019, rating: 6.6 } },
      { returnOriginal: false }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      callback(err, null);
    });
  callback(null, item);
};

initDB((err, db) => {
  if (err) throw err;

  const dbo = db.db("ismailah28");

  updateMovie(dbo, (err, res) => {
    if (err) throw err;

    if (!res.value) {
      console.log("Oops!!! Something went wrong, movie not updated");
      console.log(res);
    } else {
      console.log("Movie updated successfully");
      console.log(res.value);
    }
  });
});
