function reverse(node) {
  if(!node.next) {
    throw new Error('空链表')
  }
  let pre = null;
  let next = null;
  while(node) {
    // 保存下一个节点
    next = node.next;
    // 将next指向之前节点
    node.next = pre;
    // 将自己作为之前节点赋给pre
    pre = node
    // 为下一次处理准备
    node = next
  }
  return pre;
}


console.log(node)
console.log(reverse(node))