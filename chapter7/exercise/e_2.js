var Dictionary = require('../Dictionary');

var _wordsDic = new Dictionary();

function _countWords (text) {
	var textAry = text.split(' ');

	for (var i = 0; i < textAry.length; i++) {
		var word = textAry[i],
			count = _wordsDic.find(word) || 0;

		_wordsDic.add(word, count+1);
	}
}

var _letterDic = new Dictionary();
function _countLetter (text) {
	var letterAry = text.replace(/ /g, '').split('');

	for (var i = 0; i < letterAry.length; i++) {
		var letter = letterAry[i],
			count = _letterDic.find(letter) || 0;

		_letterDic.add(letter, count+1);
	}	
}

_countWords('the brown fox jumped over the blue fox');
_wordsDic.showAll();

_countLetter('the brown fox jumped over the blue fox');
_letterDic.showAll();
