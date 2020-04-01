const { MongoClient } = require("mongodb");

const MONGO_URI = `mongodb://localhost:27017/ismailah28`;

function initDB(callback) {
  MongoClient.connect(MONGO_URI, { useUnifiedTopology: true }, (err, db) => {
    if (err) {
      return callback(err);
    }

    return callback(null, db);
  });
}

initDB((err, db) => {
  if (err) throw err;
  console.log(`Database created by ismailah28`);
});

module.exports = { initDB };
