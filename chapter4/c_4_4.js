var Stack = require('./stack');

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