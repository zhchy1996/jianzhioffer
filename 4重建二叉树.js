function reConstructBinaryTree(pre, vin){
  // 递归出口
   if( !pre || pre.length === 0) {
     return;
   }
   let treeNode = {
     val: pre[0]
   }
   for (let i = 0; i < vin.length; i++) {
     if (vin[i] === pre[0]) {
       treeNode.left = reConstructBinaryTree(pre.slice(1, i + 1), vin.slice(0, i))
       treeNode.right = reConstructBinaryTree(pre.slice(i + 1), vin.slice(i+1))
     }
   }
   return treeNode;
}
console.log(reConstructBinaryTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7 ,2, 1, 5, 3, 8 ,6]))
// 二叉树是每个节点最多有两个子树的树结构。
// 　　前序遍历：首先访问根，再先序遍历左子树，最后先序遍历右子树。
// 　　中序遍历：首先中序遍历左子树，再访问根，最后中序遍历右子树。
// 　　后序遍历：首先后序遍历左子树，再后序遍历右子树，最后访问根。
// 前序遍历中第一个元素是根节点，得到其值，在中序遍历中找到与其相等的值，得到其位置p；
// 可知：前序遍历第二个元素到位置p为左子树的前序遍历，中序遍历中0到p为左子树的中序遍历；