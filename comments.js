// Create web server
// Create a web server that listens on port 3000 and serves the contents of comments.js at the URL /comments.
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.js', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(data);
    res.end();
  });
});

server.listen(3000);