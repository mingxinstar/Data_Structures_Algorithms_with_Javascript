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

// 1.判断括号是否匹配

function isBracketBalance (expression) {
	var ls = new Stack(),
		rs = new Stack(),
		isBalance = true;

	for (var i = 0; i < expression.length; i++) {
		var str = expression[i];

		if (str === '(') {
			ls.push(i);
		} else if (str === ')') {
			if (ls.length() === 0) {
				isBalance = false;
				rs.push(i);
			} else {
				ls.pop();
			}
		}
	}

	if (ls.length() > 0) {
		isBalance = false;
	}

	return {
		isBalance : isBalance, //是否都正确匹配
		ls : ls.dataStore, //未匹配上的左括号位置
		rs : rs.dataStore //未匹配上的右括号位置
	};
}

console.log(isBracketBalance('2+2+(18*5)+(4/'));
console.log(isBracketBalance('2+2+(18*5)+(4/2)'));
console.log(isBracketBalance('2+2+(18*5)+4/2)'));
console.log(isBracketBalance('2+2+(18*5'));
console.log(isBracketBalance('2+2+(18*5+(8/2-9/3)'));
console.log(isBracketBalance('2+2+(18*5+(8/2-(9/3'));
console.log(isBracketBalance('2+2+18*5)+8/2)-9/3)'));