/**
 * 二叉树类结构
 * Binary Search Tree
 */

var Node = function (data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

Node.prototype.show = function() {
    return this.data;
};

var BST = function () {
    this.root = null;
};

/**
 * 二叉树插入方法，通过比较每个节点大小，判断是放在左边还是右边
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
BST.prototype.insert = function(data) {
    var node = new Node(data, null, null);

    if (this.root === null) {
        this.root = node;
    } else {
        var current = this.root,
            parent = null;

        while (true) {
            parent = current;

            if (data < current) {
                current = current.left;

                if (current === null) {
                    current = node;
                    break;
                }
            } else {
                current = current.right;

                if (current === null) {
                    current = node;
                    break;
                }
            }
        }
    }
};