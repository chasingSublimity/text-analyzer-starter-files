// function for appending values to <dd></dd>'s
var appendValue = function(jsClass, num) {
	$(jsClass).text(num);
	$(".hidden").removeClass("hidden");
};

// function for computing and displaying word count
var computeWordCount = function (array) {
	appendValue(".js-word-count", array.length);
}
// function for computing and displaying unique word count
var computeUniqueCount = function(array) {
	var results = [];
	for (i=0; i < array.length; i++) {
		if (!results.includes(array[i])) {
			results.push(array[i]);
		};
	};
	appendValue(".js-unique-word-count", results.length);
};

// function for computing and displaying average word length in characters
var computeWordLength = function (array) {
	var sum = 0;
	for (i=0; i < array.length; i++) {
		sum += array[i].length;
	};
	var avgWordLength = sum / array.length;
	appendValue(".js-average-word-length", avgWordLength);
};

// function for computing and displaying average sentence length in characters
var computeSentenceLength = function(array1, array2) {
	var sentenceAvg = array1.length / array2.length;
	appendValue(".js-average-sentence-length", sentenceAvg);
}
$(document).ready(function() {
	
// Get Input, remove punctuation and return string as array of lower case letters
	$('form').submit(function(event) {
		event.preventDefault();
		var words = $('#user-text').val().toLowerCase().split(' ');
		var characters = $('#user-text').val().toLowerCase().split('').filter(function(el) {return el.length != 0});
		var sentences = $('#user-text').val().toLowerCase().split('.').filter(function(el) {return el.length != 0});
		console.log(words);

// Analytic functions
		computeWordCount(words);
		computeUniqueCount(words);
		computeWordLength(words);
		computeSentenceLength(words, sentences);

// Compute average sentence length in characters

	});
});


// Regex for refactor: split(/[ ,!."';+:-]/)