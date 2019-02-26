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

var proxy = httpProxy.createProxyServer({});

http.createServer(function(req, res) {

  console.log(req.headers.host)

  if (req.headers.host == "thebrutalistdb.com") {

    proxy.web(req, res, {target: 'localhost:3000'});

  } else if (req.headers.host == "babyloncartridge.com") {

    proxy.web(req, res, {target: 'localhost:4000'});

  }
  // proxy.web(req, res, { target: 'http://127.0.0.1:5060' });
}).listen(80);
