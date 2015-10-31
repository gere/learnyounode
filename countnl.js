var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);
var string = buff.toString();
console.log(string.split("\n").length - 1);