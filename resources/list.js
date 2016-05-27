var MongoClient = require('mongodb').MongoClient,
  test = require('assert'),

  /**
   * List of all documents
   * @param {String} url - mongodb connection
   * @param {function} callback - function with result
   */
  list = function (url, callback) {
    MongoClient.connect(url, function (err, db) {
      var collection = db.collection('documents');
      console.log('Get documents');
      collection.find({}).toArray(function (err, data) {
        db.close();
        test.equal(null, err);
        callback(data);
      });
    });
  };

module.exports = list;