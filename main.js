const http = require('http');
const cfg = {consumer_secret: 'EV8BFsuuzg25CnXVErhIRV3u7OVmDUJae5DEyNBeyWWFegForT'}

function getParameter(url, param){
    let index1 = url.indexOf(param+'=');
    if(index1 == -1)
        throw 'No param', param;
    let index2 = url.indexOf('&', index1);
    let endindex1 = index1 + param.length+1;
    if(index2 != -1)
        return url.substring(endindex1, index2)
    else
        return url.slice(endindex1)
}

const server = http.createServer((req, res) => {
    if(req.url == '/favicon.ico')
        return;
    res.writeHead(200);
    if(req.url.startsWith('/webhook')){
        try{
          let token = getParameter(req.url, 'crc_token');
          let key = cfg.consumer_secret;
          let respp = require('crypto').createHmac('sha256', key).update(token).digest('base64')

          let obj = {response_token: 'sha256=' + respp};

          console.log('webhook page ' + req.url)
          res.end(JSON.stringify(obj))
      }
      catch(e){
        res.end('none', e)
        console.log('err');
      }
    }
    else {
        res.end('test');
    }
})
server.listen(80)
console.log('runing');
