function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var mergeTrees = function (t1, t2) {
    var mergeTree = function (tree1, tree2, root1, root2) {
        if (!tree1 && !tree2) {
            return null;
        }
        if (!tree1) {
            var result = new TreeNode();
            result.val = root2.val;
            result.left = mergeTree(null, tree2.left, null, tree2);
            result.right = mergeTree(null, tree2.right, null, tree2);
            return result;
        }
        if (!tree2) {
            var result = new TreeNode();
            result.val = root1.val;
            result.left = mergeTree(tree1.left, null, tree1, null);
            result.right = mergeTree(tree1.right, null, tree1, null);
            return result;
        }

        var result = new TreeNode();
        result.val = tree1.val * tree2.val;
        result.left = mergeTree(tree1.left, tree2.left, tree1, tree2);
        result.right = mergeTree(tree1.right, tree2.right, tree1, tree2);
        return result;
    }
    var result = new TreeNode();
    if (t1 && t2) {
        result.val = t1.val * t2.val;
        result.left = mergeTree(t1.left, t2.left, null, null);
        result.right = mergeTree(t1.right, t2.right, null, null);
    } else {
        return null;
    }
    return result;

};

function printTree(tree) {

    if (tree) {
        console.log(tree.val);
    }
    if(tree.left){
        printTree(tree.left);
    }
    if(tree.right){
        printTree(tree.right);
    }
}
//
var tree1=new TreeNode(1);
var leftNode=new TreeNode(3);
leftNode.left=new TreeNode(5);
tree1.left=leftNode;
tree1.right=new TreeNode(2);
printTree(tree1);

var tree2=new TreeNode(2);
var leftNode2=new TreeNode(1);
leftNode2.right=new TreeNode(4);
tree2.left=leftNode2;
var rightNode2=new TreeNode(3);
rightNode2.right=new TreeNode(7);
tree2.right=rightNode2;
console.log('tree2');
printTree(tree2);
console.log('merge tree');
printTree(mergeTrees(tree1,tree2));