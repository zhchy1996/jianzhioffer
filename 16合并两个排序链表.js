function merge(node1, node2) {
  if (!node1) {
    return node2
  } else if (!node2) {
    return node1
  }
  let res = {};
  if (node1.val < node2.val) {
    res = node1;
    res.next = merge(node1.next, node2);
  } else {
    res = node2;
    res.next = merge(node1, node2.next)
  }
  return res
}

console.log(merge(node1, node2))


