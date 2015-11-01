var fs = require('fs');
var	http = require('http');

var fileLocation = process.argv[3];

http
.createServer(function (req, res) {	
	//stream: source.pipe(dest)
	fs.createReadStream(fileLocation).pipe(res);
})
.listen(process.argv[2]);
