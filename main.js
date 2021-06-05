const http = require('http')
const port = 8000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    req.setEncoding('utf8');
    req.on('data', chunk => {
        console.log('A chunk of data has arrived: ', chunk);
      });
}).listen(8000);


/*

const data = JSON.stringify({
  todo: 'Buy the milk'
})

const options = {
  hostname: 'localhost',
  port: 8000,
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
