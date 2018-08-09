// 创建链表
class Node {
  constructor(element) {
    this.val = element
    this.next = null
  }
  // 插入新的节点
  insert(element) {
    // 如果不是空链表，则遍历至末尾添加新节点
    if (this.val) {
      let current = this;
      while( current.next ) {
        current = current.next
      }
      current.next = new Node(element)
    } 
    // 空链表直接添加即可
    else {
      this.val = element;
      this.next = null;
    }
  }
}

// 输入链表显示倒数第k个节点，两个指针，一个先走k，然后俩个一起走，后面那个走到最后，前面指针即为需要的值
function showNode(node, k) {
  if (!node.val) {
    throw new Error('空链表')
  }
  let low = node;
  let high = node;
  if (k <=0 ) {
    throw new Error('k值小于等于0')
  }
  for (let i = 0; i < k - 1; i++) {
    if (high.next) {
      high = high.next;
    } else {
      throw new Error('超出链表长度')
    }
  }
  while (high.next) {
    low = low.next;
    high = high.next
  }
  return low;
}




let node1 = new Node();
node1.insert(1);
node1.insert(2);
node1.insert(3)
node1.insert(7)

let node2 = new Node();
node2.insert(2);
node2.insert(4);
node2.insert(5);
// console.log(node)
// console.log(showNode(node, 1))