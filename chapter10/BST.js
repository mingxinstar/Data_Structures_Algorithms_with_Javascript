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

            if (data < current.data) {
                current = current.left;

                if (current === null) {
                    parent.left = node;
                    break;
                }
            } else {
                current = current.right;

                if (current === null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
};
    
/**
 * 获取当前二叉树中的最小值
 * @return {[type]} [description]
 */
BST.prototype.getMin = function() {
    var current = this.root;

    while (current.left !== null) {
        current = current.left;
    }

    return current.data;
};

/**
 * 获取当前二叉树中的最大值
 * @return {[type]} [description]
 */
BST.prototype.getMax = function() {
    var current = this.root;

    while (current.right !== null) {
        current = current.right;
    }

    return current.data;
};

BST.prototype.find = function(data) {
    var current = this.root;

    while (current !== null) {
        if (current.data === data) {
            return current;
        } else if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

    return null;
};

/**
 * 删除对应数据的节点
 * @param  {Number} data 数据
 */
BST.prototype.remove = function(data) {
    _removeNode(this.root, data);
};

/**
 * 递归查找到对应的节点，然后进行删除操作
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 */
function _removeNode (node, data) {
    if (node === null) {
        return null;
    }

    console.log('remove : ', node.data, data);

    if (node.data === data) {
        // 如果为叶子节点那么则直接设置为null
        if (node.left === null && node.right === null) {
            return null;
        }

        if (node.left === null) {
            return node.right;
        }

        if (node.right === null) {
            return node.left;
        }

        // 如果左右都有子节点，则在其右侧节点上找到最小的节点替换当前节点，并且删除这个最小节点
        var tempNode = _getSmallest(node.right);
        console.log('_getSmallest : ', tempNode);
        node.data = tempNode.data;
        node.right = _removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = _removeNode(node.left, data);
        return node;
    } else {
        node.right = _removeNode(node.right, data);
        return node;
    }
}

/**
 * 获取一棵树上的最小节点
 * @param  {Object} node 节点
 * @return {Object} 对应最小节点
 */
function _getSmallest (node) {
    var current = node;

    while (current !== null) {
        if (current.left !== null) {
            current = current.left;
        } else {
            return current;
        }
    }

    return null;
}

module.exports = BST;