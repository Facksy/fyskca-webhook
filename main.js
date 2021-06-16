const http = require("http");

const host = 'localhost';
const port = 5545;

const requestListener = function (req, res) {

    let body = ''
    req.on('data', function(data) {
      body += data
      console.log('Partial body: ' + body)
    })
    req.on('end', function() {
      console.log('Body: ' + body)
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end('post received')
    })
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
