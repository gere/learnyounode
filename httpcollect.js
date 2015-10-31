var http = require('http');
http.get(process.argv[2], function(response){
	var result = "";
	response
	.setEncoding("utf8")
	.on("data", function(data) {
		result += data;
	})	
	.on("end", function(data) {
		console.log(result.length + "\n" + result);
	});
})
.on("error", function(e) {
	return console.error(e);
});
