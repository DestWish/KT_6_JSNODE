const http = require('http');

http.createServer((req, res) => {
  res.setHeader('UserId', '666666');
  res.end();
}).listen(3000);