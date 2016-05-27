var http = require('http'),
  add = require('./resources/add'),
  list = require('./resources/list'),
  deleteDocument = require('./resources/delete');

const PORT = 3005,
  url = 'mongodb://localhost:27017/FifthTask';

function handleRequest (request, response) {

  // Дальше велосипед, просьба слабонервным не смотреть
  switch (request.url) {
    case '/add':
      request.on('data', function (chunk) {
        add(url, JSON.parse(chunk.toString()), function (res) {
          response.writeHead(200, {'Content-Type': 'application/json'});
          response.end(JSON.stringify(res));
        });
      });
      break;
    case '/delete':
      request.on('data', function (chunk) {
        deleteDocument(url, JSON.parse(chunk.toString()), function (res) {
          response.writeHead(200, {'Content-Type': 'application/json'});
          response.end(JSON.stringify(res));
        });
      });
      break;
    case '/list':
      list(url, function (res) {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(res));
      });
      break;
    default :
      response.writeHead(404, {'content-type': 'text/html'});
      response.end();
  }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
  console.log('Server listening on: http://localhost:%s', PORT);
});