// 有关二叉树的算法问题，一般都可以通过递归来解决。那么写一个正确的递归程序，首先一定要分析正确递归结束的条件。
// 先前序遍历这棵树的每个结点，如果遍历到的结点有子结点，就交换它的两个子节点；
// 当交换完所有的非叶子结点的左右子结点之后，就得到了树的镜像

function reverse(tree) {
  if (tree === null) return;
  tree.left = [tree.right, tree.right = tree.left][0];
  reverse(tree.left);
  reverse(tree.right);
}
let tree1 = {
  val: 8,
  left: {
    val: 8,
    left: {
      val: 9,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: {
        val: 4,
        left: null,
        right: null
      },
      right: {
        val: 7,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
}

reverse(tree1)
console.log(tree1)