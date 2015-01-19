var Set = require('./Set');

var names = new Set();

names.add('Tom');
names.add('David');
names.add('Lily');
names.add('Mike');

if (names.add('Xin')) {
    console.log('add xin success');
} else {
    console.log('add xin failed');
}

