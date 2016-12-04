//var textWords = "Hello, my name is alex I don't like to use periods in my bad grammar. Finally, I chose to use a period."
// word count


$('form').submit(function(event) {
	event.preventDefault();
	var textWords = $('#user-text').val();
	var textArray = textWords.split(' ');
	var wordCount = textArray.length;

//Avg word length
	var sum = 0;
	for(var i=0; i<wordCount; i++){
		sum+=textArray[i].length;
	}
	var avgWordLength = sum/wordCount;

//sentence count
	var sentenceArray = textWords.split('.');
	var sentenceCount = sentenceArray.length - 1;

//Avg sentence length
	var newSum = 0;
	for(var i=0; i<sentenceCount; i++){
		newSum += sentenceArray[i].split(' ').length;
	}
	var avgSentenceLength = (newSum-1)/sentenceCount;

	$('.word-count').text(wordCount);
	$('.word-length').text(avgWordLength);
	$('.sentence-length').text(avgSentenceLength);
});