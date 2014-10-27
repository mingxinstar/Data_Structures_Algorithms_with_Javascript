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