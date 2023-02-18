const http = require("http");
const os = require('os');
const greeting = require('./personalmodule');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  response.write(`Date of request: ${greeting.date}<br>`);
  response.write(greeting.showMessage(os.userInfo().username));
  response.end();
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');