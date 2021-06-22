const http = require("http");

const server = http.createServer((req, res) => {
    res.end('dadata')
});
server.listen(process.env.PORT, () => {
    console.log('Server is running on ', server.address());
});
