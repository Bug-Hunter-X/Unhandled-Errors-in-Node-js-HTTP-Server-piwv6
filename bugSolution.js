const http = require('http');

const server = http.createServer((req, res) => {
  try {
    //Improved error handling
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.on('error', (error) => {
  console.error('Server error:', error);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});