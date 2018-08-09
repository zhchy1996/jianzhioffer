// 生成链表
class List {
  constructor() {
    this.next = null;
    this.list = {};
  }
  add (content, name) {
    if (this.next) {
      this.list[this.next]['next'] = name  
    }
    this.list[name] = {
      content: content,
      next: null
    }  
    this.next = name
  }
  print(oHead) {
    let arr = [];
    // let oHead = this.next;
    while(oHead) {
      arr.unshift(oHead.content);
      oHead = this.list[oHead.next];
    }
    return arr;
  }
}

let list = new List();
list.add(234, 'first')
list.add(533, 'second')
list.add(567, 'third')
console.log(list.list)
console.log(list.print(list.list.first))