const http = require('http');

function greet(name) {
  return `Hello, ${name || 'world'}!`;
}

module.exports = { greet };

if (require.main === module) {
  const port = process.env.PORT || 3000;
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(greet());
  });
  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}
