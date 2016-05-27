var MongoClient = require('mongodb').MongoClient,
  test = require('assert'),

  /**
   * Delete document by filter
   * @param {String} url - mongodb connection
   * @param {Object} filter - document filter
   * @param {Function} callback - function with result
   */
  deleteDocument = function (url, filter, callback) {
    MongoClient.connect(url, function (err, db) {
      var collection = db.collection('documents');
      console.log('Delete documents');
      collection.remove(filter, function (err, res) {
        test.equal(null, err);
        db.close();
        callback(res);
      });
    });
  };

module.exports = deleteDocument;
