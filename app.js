const http = require('http');

http.createServer((req, res) => {
    res.setHeader('UserId', '666666');
    res.setHeader('Content-Type', 'text/html; charset=utf-8;');

    if (req.url === '/home' || req.url === '/') {
        res.write("<h2>home</h2>")
    }
    else if (req.url == '/about') {
        res.write("<h2>About</h2>")
    }
    else if (req.url == '/contact') {
        res.write("<h2>Contacts</h2>")
    }
    else {
        res.write("<h2>Not Found</h2>")
    }
    res.end();
}).listen(3000);