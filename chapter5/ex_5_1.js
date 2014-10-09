var Queue = require('./queue');

var q = new Queue();
q.enqueue('huang ming xin');
q.enqueue('chen lu');
q.enqueue('xiao xin');

console.log(q.toString());

q.dequeue();

console.log(q.toString());

console.log('front : ', q.front());
console.log('back : ', q.back());