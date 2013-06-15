YUI.add('library', function(Y) {

	// -- Get Combinations Count
	//
	Y.getCombinations = function(str, combinations) {
		var pow = Math.pow,
			total = 0,
			index = combinations;

		while (index > 1) {
			total += pow(str.length, index--);
		}
		
		return total;
	}
});