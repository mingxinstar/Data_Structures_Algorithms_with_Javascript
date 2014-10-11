var PriQueue = require('./priQueue');

var Patient = function (name, code) {
	this.name = name;
	this.code = code;
}

function test () {
	var ed = new PriQueue();

	ed.enqueue(new Patient('name 1', Math.floor(Math.random()*10)));
	ed.enqueue(new Patient('name 2', Math.floor(Math.random()*10)));
	ed.enqueue(new Patient('name 3', Math.floor(Math.random()*10)));
	ed.enqueue(new Patient('name 4', Math.floor(Math.random()*10)));
	ed.enqueue(new Patient('name 5', Math.floor(Math.random()*10)));
	ed.enqueue(new Patient('name 6', Math.floor(Math.random()*10)));
	ed.enqueue(new Patient('name 7', Math.floor(Math.random()*10)));
	ed.enqueue(new Patient('name 8', Math.floor(Math.random()*10)));
	ed.enqueue(new Patient('name 9', Math.floor(Math.random()*10)));
	ed.enqueue(new Patient('name 10', Math.floor(Math.random()*10)));
	ed.enqueue(new Patient('name 12', Math.floor(Math.random()*10)));
	ed.enqueue(new Patient('name 13', Math.floor(Math.random()*10)));
	ed.enqueue(new Patient('name 14', Math.floor(Math.random()*10)));
	ed.enqueue(new Patient('name 15', Math.floor(Math.random()*10)));
	ed.enqueue(new Patient('name 16', Math.floor(Math.random()*10)));
	ed.enqueue(new Patient('name 17', Math.floor(Math.random()*10)));

	console.log(ed.toString());

	console.log('dequeue: ', ed.dequeue());

	console.log(ed.toString());
	
	console.log('dequeue: ', ed.dequeue());

	console.log(ed.toString());
}

test();