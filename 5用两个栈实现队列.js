class Stack {
  constructor() {
    this.arr = [];
  }
  push(val) {
    this.arr.push(val);
  }
  pop() {
    return this.arr.pop()
  }
  isEmpty() {
    let len = this.arr.length;
    if (len === 0) {
      return true;
    } else {
      return false;
    }
  }
}

class Line {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  in(val) {
    this.stack1.push(val);
  }
  out() {
    // 判断栈2是否为空，为空的话将栈1的全部pop，push进2，否则直接pop栈2
    if (this.stack2.isEmpty()) {
      while(!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop()
  }
}
let line = new Line();
line.in(1)
line.in(2)
line.in(3)
line.in(4)
console.log(line.out())

