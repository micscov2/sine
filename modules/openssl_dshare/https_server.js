express = require("express");
fs = require("fs");
https = require("https");

const options = {
  key: fs.readFileSync("privateKey.key"),
  cert: fs.readFileSync("certificate.crt")
};

const app = express();

app.use(function(req, res) {
  res.writeHead(200);
  res.end("hello world\n");
});

https.createServer(options, app).listen(8081);
console.log("https listening on 8081")
