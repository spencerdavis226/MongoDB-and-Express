const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
  // establish connection to database
  connectToDb: (callback) => {
    MongoClient.connect('mongodb://localhost:27017/bookstore')
      .then((client) => {
        dbConnection = client.db();
        return callback();
      })
      .catch((err) => {
        console.log(err);
        return callback(err);
      });
  },
  // return connection to the database
  getDb: () => dbConnection,
};
