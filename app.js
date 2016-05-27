var http = require('http'),
  add = require('./resources/add'),
  list = require('./resources/list'),
  deleteDocument = require('./resources/delete');

const PORT = 3005,
  url = 'mongodb://localhost:27017/FifthTask';

function handleRequest (request, response) {
  response.writeHead(200, {'Content-Type': 'application/json'});

  // Дальше велосипед, просьба слабонервным не смотреть
  switch (request.url) {
    case '/add':
      request.on('data', function (chunk) {
        add(url, JSON.parse(chunk.toString()), function (res) {
          response.end(JSON.stringify(res));
        });
      });
      break;
    case '/delete':
      request.on('data', function (chunk) {
        deleteDocument(url, JSON.parse(chunk.toString()), function (res) {
          response.end(JSON.stringify(res));
        });
      });
      break;
    case '/list':
      list(url, function (res) {
        response.end(JSON.stringify(res));
      });
      break;
  }

  if (request.method === 'OPTIONS') {
    response.end();
  }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
  console.log('Server listening on: http://localhost:%s', PORT);
});