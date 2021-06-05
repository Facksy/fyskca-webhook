const http = require('https')

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    req.setEncoding('utf8');
    req.on('data', chunk => {
        console.log('A chunk of data has arrived: ', chunk);
    });
    console.log('received a request');
}).listen(() => {  // 172.18.192.138 192.168.0.14
    console.log('Listening on port ', server.address());
});

console.log('ready!');

/*
const data = JSON.stringify({
  todo: 'Buy the milk'
})

const options = {
  hostname: 'https://webhook.site/6637fadd-ae2b-4eb9-aaa6-bbfd769aed2f',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = http.request(options)
req.write(data)
req.end()
*/
