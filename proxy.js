var http = require('http'),
httpProxy = require('http-proxy');

// httpProxy.createServer(function (req, res, proxy) {
//   console.log(req.headers.host);
// if(req.headers.host == 'thebrutalistdb.com') {
//   proxy.proxyRequest(req, res, {
//     host: 'http://thebrutalistdb.com',
//     port: 3000
//   });
// } else {
//     res.end('Site em manutenção.');
// }
// }).listen(80);

httpProxy.createProxyServer({target:'http://localhost:3000'}).listen(80);
