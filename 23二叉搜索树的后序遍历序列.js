// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

// 二叉查找树（Binary Search Tree），（又：二叉搜索树，二叉排序树）它或者是一棵空树，或者是具有下列性质的二叉树：
//  若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值； 它的左、右子树也分别为二叉排序树。

// 根据二叉搜索树的特点，序列的最后一个元素是根结点，其左子树全都比根结点小，右子树全都比根节点大。
// 将根结点前面的数组分为左右连个部分，左侧部分都小，右侧部分都大；
// 如果右侧部分有比根节点小的元素，那么就不是后序遍历，如此递归进行。

function adjustSequence(arr) {
  let len = arr.length;
  if (len < 2) {
    return true;
  }
  // 根节点
  let root = arr[len - 1];
  let i = 0;
  let j = 0;
  // 比根节点小的是左子树
  for (; i < len; i++) {
    if (arr[i] > root) {
      break;
    }
  }
  for (j = i; j < len - 1; j++) {
    if (arr[j] < root) {
      return false
    }
  }
  return adjustSequence(arr.slice(0, i)) && adjustSequence(arr.slice(i + 1, len))
}
// let arr = [5, 7, 6, 9, 11, 10, 8];
let arr = [7,4,6,5]
console.log(adjustSequence(arr))