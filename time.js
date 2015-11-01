var strftime = require('strftime');
var net = require('net');

function createDate() {	
	return strftime("%Y-%m-%d %H:%M");
}

var server = net.createServer(function (socket) {
	socket.end(createDate());
});
server.listen(process.argv[2]);

