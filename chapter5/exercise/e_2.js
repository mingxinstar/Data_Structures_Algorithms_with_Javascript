var Dequeue = require('./e_1');

function isPalindrome (words) {
	var dq = new Dequeue();

	for (var i = 0, l = words.length; i < l; i++) {
		dq.enqueue(words[i], true);
	}

	var str = '';

	while (!dq.isEmpty()) {
		str += dq.dequeue(true);
	}

	return str === words;
}

function test () {
	console.log('aassddssaa :', isPalindrome('aassddssaa'));
	console.log('adfczadf :', isPalindrome('aasssddssaa'));
	console.log('fzxvfxcvzfasd :', isPalindrome('fzxvfxcvzfasd'));
	console.log('12345654321 :', isPalindrome('12345654321'));
}

test();