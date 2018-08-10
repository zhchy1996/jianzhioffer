// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。
// 例如序列1,2,3,4,5是某栈的压入顺序，序列4，5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）。

// 解法：创建一个辅助栈，依次将原队列push，若push值与给出序列顶端值相等则pop

function isPop(arr1, arr2) {
  let stack = [];
  let i = 0;
  let j = 0;
  while(arr1[i]) {
    stack.push(arr1[i])
    while (arr2[j] && arr2[j] === stack[stack.length - 1]) {
      stack.pop()
      j++
    }
    i++
  }
  if (!stack.length) {
    return true
  } else {
    return false
  }
}
let arr1 = [1,2,3,4,5,5,6]
let arr2 = [4,5,5,6,3,2,1]
console.log(isPop(arr1, arr2))
