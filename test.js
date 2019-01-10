var http = require('http');
console.log("Server is listeining on port 8080");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World 2!');
 
}).listen(8080);
