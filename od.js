const https = require('https');

let options = {
    hostname: 'api.myip.com',
    path: '/',
    method: 'GET'
}

let req = https.request(options, res => {
    res.on('data', data => {
        console.log(data+'');
    })
})
req.end()
