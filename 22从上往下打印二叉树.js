// 创建两个数组分别存放节点与结果


function printFromTopToBottom(tree) {
  let res = [];
  let arr = [];
  arr.push(tree);
  while(arr.length) {
    // 弹出一个节点
    let node = arr.shift();
    // 将其val放入结果数组 
    res.push(node.val);
    // 如果有左右节点放入节点数组
    if (node.left) {
      arr.push(node.left);
    }
    if (node.right) {
      arr.push(node.right);
    }
  }
  return res;
}

let tree = {
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
console.log(printFromTopToBottom(tree).join(' '))