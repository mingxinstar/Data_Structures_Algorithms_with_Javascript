var BST = require('./BST');

var nums = new BST();

nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

console.log(nums.root);

/**
 * 中序遍历
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */
function inOrder (node) {
    if (node !== null) {
        inOrder(node.left);

        console.log(node.show());

        inOrder(node.right);
    }
}

// console.log('inOrder traversal :');
// inOrder(nums.root);

/**
 * 先序遍历
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */
function preOrder (node) {
    if (node !== null) {
        console.log(node.show());

        preOrder(node.left);
        preOrder(node.right);
    }
}

// console.log('preOrder traversal :');
// preOrder(nums.root);

/**
 * 先序遍历
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */
function postOrder (node) {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);

        console.log(node.show());
    }
}

// console.log('postOrder traversal :');
// postOrder(nums.root);

// console.log('min : ', nums.getMin());
// console.log('max : ', nums.getMax());

// console.log('find :', nums.find(16));

nums.remove(23);

console.log(nums.root);