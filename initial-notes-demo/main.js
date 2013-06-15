// Table : User_IDS

/*  	--key--			--value--
		542fe7			marc07
		8733c9			jimbo2
		fb425e			djgango
*/

// -- Main
//
YUI().use('initialize', 'library', 'id-manager', 'node', function(A) {
	var legend = A.Variables.legend;

	var result = A.getCombinations(legend, A.Variables.key_length);

	A.one('.wrapper').append('<p>combinations count: ' + result + '</p>'); // PASS!

	// -- ID manager test
	//
	var idManager = new A.IDManager();

	result = idManager.generateUniqueID(legend);

	A.one('.wrapper').append('<p>hex ID generated: ' + result + '</p>'); // PASS!
	//
	// --
});