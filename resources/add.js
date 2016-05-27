var MongoClient = require('mongodb').MongoClient,
  test = require('assert'),

  /**
   * Add a document
   * @param {String} url - mongodb connection
   * @param {Object} data - stored document
   * @param {function} callback - function with result
   */
  add = function (url, data, callback) {
    MongoClient.connect(url, function (err, db) {
      var collection = db.collection('documents');
      console.log('Add document');
      collection.insertOne(data, function (err, res) {
        db.close();
        test.equal(null, err);
        callback(res);
      });
    });
  };

module.exports = add;

