/**
 * 散列表类
 */

var HashTable = function (length) {
	this.length = length || 137;
	this.table = new Array(this.length);
}

/**
 * 散列函数
 * @param  {String} data 要保存的值
 * @return {Number}      对应在散列中的位置
 */
HashTable.prototype.simpleHash = function(data) {
	var total = 0;
	for (var i = data.length - 1; i >= 0; i--) {
		total += data.charCodeAt(i);
	}

	return total % this.length;
};

const H = 37;
/**
 * 散列函数，使用霍纳算法
 * @param  {String} data 要保存的值
 * @return {Number}      对应在散列中的位置
 */
HashTable.prototype.betterHash = function(data) {
	var total = 0;
	for (var i = data.length - 1; i >= 0; i--) {
		total += (H * data.charCodeAt(i));
	}

	console.log("betterHash : ", total % this.length);

	return total % this.length;
};
	
/**
 * 开链法，形成一个二维数组
 * @return {[type]} [description]
 */
HashTable.prototype.buildChains = function() {
	for (var i = 0, l = this.table.length; i < l; i++) {
		this.table[i]= new Array();
	}
};

/**
 * 添加数据
 * @param  {String} key 键值
 * @param  {String} data 保存的数据
 */
HashTable.prototype.put = function(key, data) {
	this.table[this.betterHash(key)].push(data);
};

/**
 * 获取数据
 * @param  {String} key 键值
 * @return {String}     数据
 */
HashTable.prototype.get = function(key) {
	return this.table[this.betterHash(key)];
};

/**
 * 显示所有的元素
 */
HashTable.prototype.showDistro = function() {
	for (var i = 0, l = this.length; i < l; i++) {
		if (this.table[i]) {
			console.log(i + " : " + this.table[i]);
		}
	}
};

module.exports = exports = HashTable;