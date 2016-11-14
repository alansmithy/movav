// Load the fs (filesystem) module
var fs = require('fs');
var d3 = require('d3');

fs.readFile("input.csv", "utf8", function(error, data) {
  data = d3.csvParse(data);
  console.log(data.length);


});

/*// Read the contents of the file into memory.
fs.readFile('numbersin.txt', function (err, inputData) {

	console.log("Hello World")

	// If an error occurred, throwing it will
  	// display the exception and end our app.
  	if (err) throw err;

  	var text = inputData.toString();

  	console.log(text);


});*/