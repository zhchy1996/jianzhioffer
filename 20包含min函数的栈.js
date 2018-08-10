// 创建一个辅助栈，在每次push时将最小值push进辅助栈，每次pop时辅助栈也pop即可
// 有一种方法可以直接获得数组中的最小值
// let arr = [1,2,3,4];
// Math.min.apply({}, arr);
// 也可以这么写
// Math.min(...arr)

class Stack {
  constructor() {
    this.stack = [];
    this.stack1 = [];
    this.minVal;
  }

  push(val) {
    this.stack.push(val)
    if (this.minVal < val) {
      this.stack1.push(this.minVal)
    } else {
      this.stack1.push(val)
      this.minVal = val;
    }
  }
  
  pop() {
    this.stack1.pop()
    this.minVal = this.stack1[this.stack1.length - 1];
    return this.stack.pop()
  }

  min() {
    let min = this.stack1[this.stack1.length - 1];
    
    return min
  }
}



let stack = new Stack();
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.min())
stack.push(0)
stack.pop()
stack.push(1)
console.log(stack.min())
