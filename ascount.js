var fs = require('fs');
fs.readFile(process.argv[2], function(err, buff) {
	var string = buff.toString();
	console.log(string.split("\n").length - 1);
});
