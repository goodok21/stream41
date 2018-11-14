const http = require('http');
const ms = require('mediaserver');

var path = require('path');

http.createServer(function (req, res) {

  var _path;
  if(req.url == "/" || req.url == "/index.html"){
    _path = "/index.html";
  } else if (req.url == "/birds.ogg") {
    _path = "/birds.ogg";
  } else if (req.url == "/videoplayback") {
    _path = "/videoplayback.mp4";
  } else {
    res.write("Target Not Found!" );
    res.end();
    return;
  }

  ms.pipe(req, res, path.join(__dirname, _path), path.extname(_path));

}).listen(1337, '127.0.0.1');
