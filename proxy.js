
var http = require('http'),
httpProxy = require('http-proxy');

httpProxy.createServer(function (req, res, proxy) {

if(req.headers.host == 'thebrutalistdb.com') {
  proxy.proxyRequest(req, res, {
    host: 'http://localhost',
    port: 3000
  });
} else {
    res.end('Site em manutenção.');
}
}).listen(80);