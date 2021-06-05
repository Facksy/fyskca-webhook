/*const http = require('http')
const port = 8000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    req.setEncoding('utf8');
    req.on('data', chunk => {
        console.log('A chunk of data has arrived: ', chunk);
    });
    console.log('received a request');
}).listen(5545, '192.168.0.14');

console.log('ready!');


const data = JSON.stringify({
  todo: 'Buy the milk'
})

const options = {
  hostname: '93.5.162.60',
  port: 5545,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = http.request(options)
req.write(data)
req.end()*/

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
