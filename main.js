const http = require("http");

const server = http.createServer((req, res) => {
    res.end('dadata')
}).listen(process.env.PORT);
