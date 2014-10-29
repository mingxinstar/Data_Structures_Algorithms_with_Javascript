var Dictionary = require('../Dictionary'),
	fs = require('fs');

var FILE_NAME = './phone.txt';
function _readFile () {
	return fs.readFileSync(FILE_NAME, {encoding : 'utf8'})
}

function _writeFile (text) {
	fs.writeFileSync(FILE_NAME, text);
}

var phoneBook = new Dictionary();

function _initBook () {
	var dataAry = _readFile().split('\n');

	for (var i = 0; i < dataAry.length; i++) {
		var data = dataAry[i].split(' ');

		phoneBook.add(data[0], data[1]);
	}

	phoneBook.showAll();
	console.log();
	phoneBook.showSort();
	console.log();
	console.log(phoneBook.find('name1'));
	console.log();
	phoneBook.add('xin', 18502136416);
	phoneBook.showAll();
	console.log();
}

_initBook();