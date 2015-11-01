var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	
	req.on('data', function (chunk) {
		res.write(chunk.toString().toUpperCase());
	})
	.on('end', function () {
		res.end();
	})
});
server.listen(process.argv[2]);