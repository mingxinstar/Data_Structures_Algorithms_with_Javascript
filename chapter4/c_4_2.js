var Stack = function () {
	this.dataStore = [];
	this.top = 0;
}

Stack.prototype.push = function(element) {
	this.dataStore[this.top++] = element;
};

Stack.prototype.pop = function() {
	this.top--;
	return this.dataStore.pop();
};

Stack.prototype.peek = function() {
	return this.dataStore[this.top-1]
};

Stack.prototype.clear = function() {
	this.top = 0;
	delete this.dataStore;
	this.dataStore = [];
};

Stack.prototype.length = function() {
	return this.top;
};

//以下为测试代码

/**
 * 转进制方法
 * @param  {[type]} num  [description]
 * @param  {[type]} base [description]
 * @return {[type]}      [description]
 */
function mulBase (num, base) {
	var s = new Stack();

	do {
		s.push(num % base);
		num = Math.floor(num/base);
	} while (num > 0);

	var converted = '';

	while (s.length() > 0) {
		converted += s.pop();
	}

	return converted;
}

console.log(mulBase(33, 2));
console.log(mulBase(51, 2));
console.log(mulBase(3, 2));
console.log(mulBase(3, 8));
console.log(mulBase(99, 8));

/**
 * 判断是否回文
 * @param  {[type]}  word [description]
 * @return {Boolean}      [description]
 */
function isPalindrome (word) {
	var s = new Stack();
	for (var i = 0; i < word.length; i++) {
		s.push(word[i]);
	}

	var rword = '';
	while (s.length() > 0) {
		rword += s.pop();
	}

	return word === rword;
}

console.log('hello : ', isPalindrome('hello'))
console.log('racecar : ', isPalindrome('racecar'))

// 以下为练习部分 

