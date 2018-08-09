// 有关二叉树的算法问题，一般都可以通过递归来解决。那么写成一个正确的递归程序，首先一定要分析正确递归结束的条件。
// 如果根节点相同则递归调用isSubtree（），如果根节点不相同，则判断root1的左子树和root2是否相同，再判断右子树和tree2是否相同;
// 注意null的条件，HasSubTree中，如果两棵树都不为空才进行判断，isSubtree中，如果root2为空，则说明第二棵树遍历完了，即匹配成功;
// root1为空有两种情况：（1）如果root1为空&&root2不为空说明不匹配，（2）如果root1为空，root2为空，说明匹配。
function isSubTree(tree1, tree2) {
  if (tree2 === null) {
    return true;
  } else if (tree1 === null) {
    return false;
  }
  if (tree1.val === tree2.val) {
    return isSubTree(tree1.left, tree2.left) && isSubTree(tree1.right, tree2.right);
  }else {
    return false;
  }
}

function hasSubTree(tree1, tree2) {
  if (tree1 ===null || tree2 === null) {
    return false;
  }
  return isSubTree(tree1, tree2) || hasSubTree(tree1.left, tree2) || hasSubTree(tree1.right, tree2)
}
//   树1                 树2         
//       8                  8
//     /   \               / \
//    8     7             9   2
//   / \
//  9   2
//     / \
//    4   7
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
let tree2 = {
  val: 8,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
}
console.log(tree1, tree2)
console.log(hasSubTree(tree1, tree2))