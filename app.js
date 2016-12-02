$(document).ready(function() {

	console.log("ready!")
// Get Input, remove punctuation and return string 
// as array of lower case letters
	
	$('form').submit(function(event) {
		event.preventDefault();
		var text = $('#user-text').val().toLowerCase().split(" ");
		console.log(text);
	});

// Compute total word count

// Compute unique word count

// Compute average word length in characters

// Compute average sentence length in characters

// Write function that alters the text of a given <dd></dd> with 
// the results of the compute functions above

});


// Regex for refactor: split(/[ ,!."';+:-]/)