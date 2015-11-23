var http = require('http');

http.createServer(function (request, response) {
  response.sendFile('easyshop/index.html');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');