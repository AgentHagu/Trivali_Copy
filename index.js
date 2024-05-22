var http = require('http');
var fs = require("fs");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log("HELLO");
    fs.writeFile('hello.txt', "TEST WORKED WOWOWOWOW", err => {});
    res.end('Hello World!');
}).listen(8080); 