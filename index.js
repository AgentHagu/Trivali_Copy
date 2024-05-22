var http = require('http');
var fs = require("fs");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/HTML' });
    console.log("HELLO");
    fs.writeFile('hello.txt', "TEST WORKED WOWOWOWOW", err => { });
    res.end('ONE TWO THREE FOUR!');
}).listen(8080); 