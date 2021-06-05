const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    req.setEncoding('utf8');
    req.on('data', chunk => {
        console.log('A chunk of data has arrived: ', chunk);
    });
    console.log('received a request');
}).listen(5545, '192.168.0.14', () => {
    console.log('Listening on ', server.address());
});

console.log('ready!');


const data = JSON.stringify({
  todo: 'Buy the milk'
})

const options = {
  hostname: '93.5.162.60',
  method: 'POST',
  port: '5545',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}
/*
const req = http.request(options)
req.write(data)
req.end()*/
