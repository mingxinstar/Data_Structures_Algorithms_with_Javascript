/**
 * 字典类
 */

var Dictionary = function () {
	this.dataStore = []; //此处用了Array，不过稳重理由不充分，如果只是排序，那么用OBject.keys获得key数组即可
	this.dataStore = {}; //个人暂时倾向于直接用Object
};

Dictionary.prototype.add = function(key, value) {
	this.dataStore[key] = value;
};

Dictionary.prototype.find = function(key) {
	return this.dataStore[key];
};

Dictionary.prototype.remove = function(key) {
	delete this.dataStore[key];
};

Dictionary.prototype.showAll = function() {
	for (var key in this.dataStore) {
		console.log(key + ' -> ' + this.dataStore[key]);
	}
};

Dictionary.prototype.showSort = function() {
	var keys = Object.keys(this.dataStore).sort();

	for (var i = 0, l = keys.length; i < l; i++) {
		console.log(keys[i] + ' -> ' + this.dataStore[keys[i]]);
	}
};

Dictionary.prototype.count = function() {
	var n = 0;

	for (var key in this.dataStore) {
		n++;
	}

	return n;
};

Dictionary.prototype.clear = function() {
	for (var key in this.dataStore) {
		delete this.dataStore[key];
	}
};


module.exports = exports = Dictionary;