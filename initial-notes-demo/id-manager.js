YUI.add('id-manager', function(Y) {
	var IDManager = function() {};

	IDManager.prototype = {
		_ids: []
	};

	IDManager.prototype.add = function(key, value) {
		this._ids[key] = value;
	};

	IDManager.prototype.get = function(key) {
		return this._ids[key];
	};

	// -- Generate ID
	//
	IDManager.prototype.generateID = function(possible) {
		var id = "";

		for (var index = 0; index < 5; index++) {
			id += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		return id;
	}

	// -- Generate Unique ID
	//
	IDManager.prototype.generateUniqueID = function(possible) {
		var id = this.generateID(possible),
			max_trys = 10;
			endless_loop_prevented = true;

		while (this.get(id) && endless_loop_prevented) {
			// try again

			id = IDManager.generateID();

			if (max_trys-- <= 1) {
				endless_loop_prevented = false;
			}
		}

		var uniqueID = id;

		return uniqueID;
	}

	Y.IDManager = IDManager;
});