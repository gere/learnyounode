var fs = require('fs');
var path = require('path');

module.exports = function(ph, extension, callback) {
	var ext = "." + extension;
	var result = [];
	fs.readdir(ph, function(err, list) {
		if (err) {
			return callback(err);
		}
		for (var i = 0; i < list.length; i++) {
			if (path.extname(list[i]) == ext) {				
				result.push(list[i]);
			}
		};
		return callback(null, result);
	});
	
};