const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}
console.log(results);
let ip = results['eth0'][0]


const http = require("http");

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
server.listen(port, ip, () => {
    console.log('Server is running on ', server.address());
});


const https = require('https');

let options = {
    hostname: 'api.my-ip.io',
    path: '/',
    method: 'GET'
}

let req = https.request(options, res => {
    res.on('data', data => {
        console.log('data ' + data);
    })
})
req.end()
