var http = require('http');
var bl = require('bl');
var result = {};
var count = 0;

function callback (argc, index, data) {
	result[index] = data;
	count++;	
	if (count == argc - 2) {
		for (var i = 2; i < argc; i++) {
			console.log(result[i]);
		}	
	}
}

for (var i = 2; i < process.argv.length; i++) {
	var url = process.argv[i];
	
	(function(index, url) {
		http.get(url, function(response) {			
			response.pipe(bl(function(err, data) {
				if (err) 
					return console.error(err);

				data = data.toString();								
				callback(process.argv.length, index, data);
			}));
		});
	})(i, url);
}

